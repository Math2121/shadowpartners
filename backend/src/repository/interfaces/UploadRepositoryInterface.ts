import {  File, Prisma } from "@prisma/client";


interface FileData {
    name: string;
    city: string;
    country: string;
    favorite_sport: string;
}


export interface UploadRepositoryInterface {
    create(data: FileData): Promise<File>

    getAll(query: string): Promise<File[]>

}