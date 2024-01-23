import { FastifyReply, FastifyError } from "fastify"
import { ERROR500 } from "./constants"
import { injectable } from "inversify";

export const ERRORS = {
    invalidToken: new Error('Token is invalid.'),
    userExists: new Error('User already exists'),
    userNotExists: new Error('User not exists'),
    userCredError: new Error('Invalid credential'),
    tokenError: new Error('Invalid Token'),
}

export function handleServerError(reply: FastifyReply, error: any) {
    console.log(error)
    return reply.status(ERROR500.statusCode).send({ status: ERROR500, message: error.message });
}
export class AppError{
    public readonly message:string
    public readonly statusCode:number

    constructor(message:string, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}