import { Prisma, PrismaClient } from "@prisma/client";

import { injectable } from "inversify";

import { UploadRepositoryInterface } from "./interfaces/UploadRepositoryInterface";
const prismaClient = new PrismaClient();

@injectable()
class UploadRepository implements UploadRepositoryInterface {


    async getAll(): Promise<[]> {
        return []

    }

    async create(dataParam: Prisma.FileCreateInput): Promise<void> {

        await prismaClient.file.create({
            data: {
                city: dataParam.city,
                country: dataParam.country,
                favorite_sport: dataParam.favorite_sport,
                name: dataParam.name
            }
        })

    }


}

export { UploadRepository }