import Fastify, { FastifyServerOptions } from 'fastify';
import { generalRoutes } from './routes/general';
import { pipe } from 'fp-ts/lib/function';

export const app = (opts?: FastifyServerOptions) =>
  pipe(Fastify(opts), server =>
    server.register(generalRoutes, { prefix: '/api' }),
  );
