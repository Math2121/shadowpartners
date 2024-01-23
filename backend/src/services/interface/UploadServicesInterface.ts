import { File } from "@prisma/client";
import { JsonArray } from "@prisma/client/runtime/library";

export interface UploadServicesInterface {
    readFileAndSave(buffer: string): Promise<{
        status: number,
        message: string
    }>
    searchAllData(query: string): Promise<{ status: number; data: File[]; }> 
}