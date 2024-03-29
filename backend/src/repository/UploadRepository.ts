import { File, Prisma, PrismaClient } from "@prisma/client";

import { injectable } from "inversify";

import { UploadRepositoryInterface } from "./interfaces/UploadRepositoryInterface";

const prismaClient = new PrismaClient();

@injectable()
class UploadRepository implements UploadRepositoryInterface {


    async getAll(query: string): Promise<File[]> {
        const results: File[] = await prismaClient.$queryRaw`
            SELECT * FROM File
            WHERE name LIKE ${`%${query}%`}
            OR city LIKE ${`%${query}%`}
            OR country LIKE ${`%${query}%`}
            OR favorite_sport LIKE ${`%${query}%`}
        `;
        return results

    }

    async create(dataParam: Prisma.FileCreateInput): Promise<File> {

        const file = await prismaClient.file.create({
            data: {
                city: dataParam.city,
                country: dataParam.country,
                favorite_sport: dataParam.favorite_sport,
                name: dataParam.name
            }
        })

        return file

    }


}

export { UploadRepository }