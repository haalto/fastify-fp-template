import { Type } from '@sinclair/typebox';

export const HealthSchemaResponses = {
  200: Type.Object({
    status: Type.String(),
    message: Type.Optional(Type.String()),
  }),
};
