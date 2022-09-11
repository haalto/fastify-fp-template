import { FastifyReply, FastifyRequest } from 'fastify';
import { pipe } from 'fp-ts/lib/function';
import { getDb } from '../database/prisma';
import * as TE from 'fp-ts/TaskEither';

export const checkHealth = async (_: FastifyRequest, reply: FastifyReply) =>
  pipe(
    TE.tryCatch(
      () => getDb().$connect(),
      () => new Error("Couldn't connect to database"),
    ),
    TE.fold(
      error =>
        TE.of(
          reply.status(200).send({
            status: 'error',
            message: error.message,
          }),
        ),
      () => TE.of(reply.send({ status: 'OK' })),
    ),
  )();
