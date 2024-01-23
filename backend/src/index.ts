import fastify from 'fastify';
import { pino } from 'pino';


import { AppError } from './helpers/error';
import uploadRouter from './routes/upload.router';
import multer from 'fastify-multer'
const port =  3000;

const startServer = async () => {
  try {
    const server = fastify({
      logger: pino({ level: 'info' }),
    })
    server.register(require('@fastify/cors'), {
      origin: '*',
    })
    server.register(require('@fastify/helmet'), {
      global: true
    })
    server.register(multer.contentParser)

    server.register(async api => {
      api.register(uploadRouter, { prefix: "/files" });
    }, { prefix: "/api" });


    server.setErrorHandler((error, request, reply) => {
      if (error instanceof fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {

        reply.status(500).send({ ok: false })
      }
      if (error instanceof AppError) {
        console.log(error)

        reply.status(500).send(error.message)
      }
      reply.send(error)
    })

    server.listen({ port, host: '0.0.0.0' }, function (err, address) {
      server.log.info(`server listening on ${address}`);
    });
  } catch (e) {
    console.error(e)
  }
}

process.on('unhandledRejection', (e) => {
  console.error(e)
  process.exit(1)
})

startServer()