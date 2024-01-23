export interface UploadServicesInterface {
    readFileAndSave(buffer: string): Promise<{
        status: number,
        message: string
    }>
}