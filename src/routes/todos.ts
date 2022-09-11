import { FastifyInstance } from 'fastify';
import { pipe } from 'fp-ts/lib/function';
import {
  CreateTodoBodySchema,
  CreateTodoRequestSchema,
  CreateTodoResponsesSchema,
} from '../schemas/todos';
import { createTodo } from '../controllers/todos';

export const todoRoutes = (server: FastifyInstance) =>
  pipe(server, server =>
    server.post(
      '/',
      {
        schema: {
          body: CreateTodoBodySchema,
          response: CreateTodoResponsesSchema,
        },
      },
      createTodo,
    ),
  );
