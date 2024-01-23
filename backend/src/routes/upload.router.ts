'use strict'
import { FastifyInstance } from 'fastify'

import fastifyMulter from 'fastify-multer';
import * as controller from '../controller'


const upload = fastifyMulter({
    limits: {
        fileSize: 1024 * 1024, // 1MB
    },
    fileFilter: (req, file, done) => {
        if (file.mimetype !== 'text/csv') {
            return done(new Error('Only CSV files are allowed.'));
        }
        done(null, true);
    },
});


export default async function (fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/',
        handler: controller.donwload,
        preHandler: upload.single('file')
    })



    // fastify.route({
    //     method: 'GET',
    //     url: '/:event_id',
    //     schema: GetOneEventSchema,
    //     handler: controller.getOneEvent
    // })


    // fastify.route({
    //     method: 'GET',
    //     url: '/',
    //     schema: GetAllSchema,
    //     handler: controller.getAllEvent
    // })



    // fastify.route({
    //     method: 'PUT',
    //     url: '/:event_id',
    //     schema: UpdateEventSchema,
    //     handler: controller.updateOneEvent
    // })



    // fastify.route({
    //     method: 'DELETE',
    //     url: '/delete/:event_id',
    //     schema: DeleteOneEventSchema,
    //     handler: controller.deleteOneEvent
    // })
}