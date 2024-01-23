import {  Prisma } from "@prisma/client";
import { JsonArray } from "@prisma/client/runtime/library";



export interface UploadRepositoryInterface {
    create(data: Prisma.FileCreateInput): Promise<void>

    getAll(query: string): Promise<File[]>

}