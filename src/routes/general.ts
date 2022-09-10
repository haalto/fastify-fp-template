import { FastifyInstance } from 'fastify';
import { checkHealth } from '../controllers/general';

export const generalRoutes = (server: FastifyInstance) => {
  server.get('/health', { schema: { response: null } }, checkHealth);
  return server;
};
