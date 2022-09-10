import { FastifyReply, FastifyRequest } from 'fastify';

export const checkHealth = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  reply.send({ status: 'OK' });
};
