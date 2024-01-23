import {  Prisma } from "@prisma/client";



export interface UploadRepositoryInterface {
    create(data: Prisma.FileCreateInput): Promise<void>

    getAll(): Promise<[]>

}