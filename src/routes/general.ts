import { FastifyInstance } from 'fastify';
import { checkHealth } from '../controllers/general';
import { pipe } from 'fp-ts/lib/function';
import { HealthSchemaResponses } from '../schemas/general';

export const generalRoutes = (server: FastifyInstance) =>
  pipe(server, server =>
    server.get(
      '/health',
      { schema: { response: HealthSchemaResponses } },
      checkHealth,
    ),
  );
