import "reflect-metadata"
import { Container } from "inversify";

import TYPES from "./types";
import { UploadServices } from "../../../services/UploadServices";
import { UploadServicesInterface } from "../../../services/interface/UploadServicesInterface";
import { UploadRepositoryInterface } from "../../../repository/interfaces/UploadRepositoryInterface";
import { UploadRepository } from "../../../repository/UploadRepository";




const container = new Container()


container.bind<UploadServicesInterface>(TYPES.UploadServices).to(UploadServices)

container.bind<UploadRepositoryInterface>(TYPES.UploadRepository).to(UploadRepository)

export default container