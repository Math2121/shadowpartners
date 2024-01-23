import "reflect-metadata"
import { describe, expect, beforeEach, it, jest } from '@jest/globals';
import { UploadRepositoryInterface } from "../../repository/interfaces/UploadRepositoryInterface";

import { UploadServices } from "../../services/UploadServices";

interface FileData {

    name: string;
    city: string;
    country: string;
    favorite_sport: string;
}

const mockBuffer = 'John Doe,New York,USA,Basketball\nJane Smith,London,UK,Tennis\n';

describe("UploadServices", () => {
    let uploadServices: UploadServices;
    let uploadRepository: UploadRepositoryInterface;
    let mockData = [
        {
            id: 1,
            name: "John Doe",
            city: "New York",
            country: "USA",
            favorite_sport: "Soccer",
        },
        {
            id: 2,
            name: "Jane Doe",
            city: "London",
            country: "UK",
            favorite_sport: "Tennis",
        },
    ];

    beforeEach(() => {
        uploadRepository = {
            create: (data: FileData) => {
                return new Promise((resolve, reject) => {
                    resolve(mockData[0])
                });
            },
            getAll: (query: string) => {
                return new Promise((resolve, reject) => {
                    resolve(mockData)
                });
            },
        };
        uploadServices = new UploadServices(uploadRepository);


    });

    describe("readFileAndSave", () => {
        it("should return success when file is uploaded successfully", async () => {



            const result = await uploadServices.readFileAndSave(mockBuffer);

   
            expect(result.status).toBe(200);
            expect(result.message).toBe("The file was uploaded successfully.");
        });

        it("should return error when there is an error uploading the file", async () => {
            const mockBuffer = '';

   
            const result = await uploadServices.readFileAndSave(mockBuffer);


            expect(result.status).toBe(500);
            expect(result.message).toBe("TRY_AGAIN");
        });
    });

    describe("searchAllData", () => {
        it("should return success and the data when the query is found", async () => {
      

            const result = await uploadServices.searchAllData("query");

  
            expect(result.status).toBe(200);
            expect(result.data).toEqual(mockData);
        });
    });
});