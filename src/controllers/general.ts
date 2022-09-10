import { FastifyReply, FastifyRequest } from 'fastify';
import { pipe } from 'fp-ts/lib/function';

export const checkHealth = async (_: FastifyRequest, reply: FastifyReply) =>
  pipe(reply.send({ status: 'OK' }));
