import { FastifyRequest, FastifyReply } from 'fastify'

import { ERROR400, ERROR401 } from './constants'

import * as JWT from 'jsonwebtoken'

export const checkValidRequest = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: any,
) => {
  try {
    let tokenRequest = request.headers.authorization as string
    const token = tokenRequest.replace('Bearer ', '')
    if (token) {
      JWT.verify(token, process.env.APP_JWT_SECRET ?? '', (err, decoded) => {
        if (err) {
          return reply.code(ERROR400.statusCode).send(ERROR401)
        }
        done()
      })
    } else {
      return reply.code(ERROR400.statusCode).send(ERROR400)
    }
  } catch (e) {
    return reply.code(ERROR400.statusCode).send(ERROR400)
  }
}

