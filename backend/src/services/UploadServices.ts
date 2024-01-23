import { inject, injectable } from "inversify";
import { UploadServicesInterface } from "./interface/UploadServicesInterface";
import TYPES from "../shared/inversify/container/types";
import { UploadRepositoryInterface } from "repository/interfaces/UploadRepositoryInterface";

import { Prisma } from "@prisma/client";
import { ERROR500, STANDARD } from "../helpers/constants";

import { Readable } from 'stream'
import readline from "readline"
import { JsonArray } from "@prisma/client/runtime/library";


@injectable()
export class UploadServices implements UploadServicesInterface {
    constructor(@inject(TYPES.UploadRepository) private uploadRepository: UploadRepositoryInterface) { }


    async readFileAndSave(buffer: string): Promise<{ status: number; message: string; }> {


        try {
            const parsedData: Prisma.FileCreateInput[] = [];

            const bufferStream = new Readable();
            bufferStream.push(buffer);
            bufferStream.push(null);

            const personsLine = readline.createInterface({
                input: bufferStream
            })

            for await (let line of personsLine) {
                const personsLine = line.split(",")
                parsedData.push({

                    name: personsLine[0],
                    city: personsLine[1],
                    country: personsLine[2],
                    favorite_sport: personsLine[3]

                })
            }


            parsedData.map(async (row) => {
                await this.uploadRepository.create(row)
            })


            return {
                status: STANDARD.SUCCESS,
                message: 'The file was uploaded successfully.'
            }
        } catch (error) {
            return {
                status: ERROR500.statusCode,
                message: ERROR500.message
            }
        }


    }

    async searchAllData(query: string): Promise<{ status: number; data: JsonArray; }> {

        const data = await this.uploadRepository.getAll(query)
        return {
            status: STANDARD.SUCCESS,
            data
        }
    }

}