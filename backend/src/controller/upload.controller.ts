import { FastifyReply, FastifyRequest } from "fastify"

import container from "../shared/inversify/container"
import { UploadServicesInterface } from "services/interface/UploadServicesInterface"
import TYPES from "../shared/inversify/container/types"



const uploadServices = container.get<UploadServicesInterface>(TYPES.UploadServices)

declare module 'fastify' {
    interface FastifyRequest {
        file: {
            buffer: string;
        };
    }
}

export const donwload = async (request: FastifyRequest, reply: FastifyReply) => {
    const  {buffer}  = request.file;

    const response = await uploadServices.readFileAndSave(buffer)

    reply.status(response.status).send({
        message: response.message
    })

}



// export const getAllEvent = async (request: FastifyRequest<{ Querystring: { page: string; } }>, reply: FastifyReply) => {
//   try {
//     const page = parseInt(request.query.page) || 1;

//     const event = await eventGetAllUseCase.execute(page)
//     reply.status(STANDARD.SUCCESS).send(event)

//   } catch (error) {
//     handleServerError(reply, error)
//   }
// }


