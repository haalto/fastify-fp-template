import { Type } from '@sinclair/typebox';

export const TodoSchema = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  description: Type.String(),
  createdAt: Type.String({ format: 'date-time' }),
  updatedAt: Type.String({ format: 'date-time' }),
});

export const CreateTodoResponsesSchema = {
  200: TodoSchema,
};

export const CreateTodoBodySchema = Type.Object({
  title: Type.String(),
  description: Type.Optional(Type.String()),
});
