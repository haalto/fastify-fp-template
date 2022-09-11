import { FastifyReply, FastifyRequest } from 'fastify';
import { pipe } from 'fp-ts/lib/function';

import { CreateTodoBodySchema } from '../schemas/todos';
import { Todos } from '../services/todos';
import * as TE from 'fp-ts/TaskEither';
import { Static } from '@sinclair/typebox';

export const createTodo = async (
  request: FastifyRequest<{ Body: Static<typeof CreateTodoBodySchema> }>,
  reply: FastifyReply,
) =>
  pipe(
    request.body,
    ({ title, description }) =>
      TE.tryCatch(
        () => Todos.create(title, description),
        error => (console.log(error), new Error("Couldn't create todo")),
      ),
    TE.fold(
      error => TE.of(reply.status(500).send({ message: error.message })),
      todo => TE.of(reply.status(201).send(todo)),
    ),
  )();
