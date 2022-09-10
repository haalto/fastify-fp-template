import { FastifyInstance } from 'fastify';
import { checkHealth } from '../controllers/general';
import { pipe } from 'fp-ts/lib/function';

export const generalRoutes = (server: FastifyInstance) =>
  pipe(server, server =>
    server.get('/health', { schema: { response: null } }, checkHealth),
  );
