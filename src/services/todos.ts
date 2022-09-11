import { getDb } from '../database/prisma';

export const Todos = {
  getAll: async () => {
    const db = getDb();
    return db.todo.findMany();
  },
  create: async (title: string, description: string) => {
    const db = getDb();
    return db.todo.create({
      data: {
        title,
        description,
      },
    });
  },
};
