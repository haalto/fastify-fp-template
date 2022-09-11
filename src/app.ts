import Fastify, {
  FastifyBaseLogger,
  FastifyInstance,
  FastifyLoggerInstance,
  FastifyRequest,
  FastifySchema,
  FastifyServerOptions,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerBase,
  RawServerDefault,
} from 'fastify';
import { generalRoutes } from './routes/general';
import { todoRoutes } from './routes/todos';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { pipe } from 'fp-ts/lib/function';
import { RouteGenericInterface } from 'fastify/types/route';

export type FastifyRequestTypebox<TSchema extends FastifySchema> =
  FastifyRequest<
    RouteGenericInterface,
    RawServerDefault,
    RawRequestDefaultExpression<RawServerDefault>,
    TSchema,
    TypeBoxTypeProvider
  >;

export type FastifyTypebox = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  RawReplyDefaultExpression<RawServerDefault>,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>;

export const app = (opts?: FastifyServerOptions) =>
  pipe(Fastify(opts).withTypeProvider<TypeBoxTypeProvider>(), async server => {
    await server.register(todoRoutes, { prefix: '/api/todos' });
    await server.register(generalRoutes, { prefix: '/api' });
    return server;
  });
