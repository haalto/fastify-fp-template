import { pipe } from 'fp-ts/lib/function';
import { getDb } from '../database/prisma';

export const Todos = {
  getAll: async () => pipe(getDb(), db => db.todo.findMany()),
  create: async (title: string, description?: string) =>
    pipe(getDb(), db => db.todo.create({ data: { title, description } })),
};
