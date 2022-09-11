import { app } from '../src/app';
import { getDb } from '../src/database/prisma';

beforeAll(async () => {
  await getDb().todo.deleteMany({ where: {} });
});

afterAll(async () => {
  await getDb().todo.deleteMany();
});

describe('Todos CRUD operations', () => {
  it('should create a todo', async () => {
    const instance = await app({ logger: true });
    const response = await instance.inject({
      method: 'POST',
      url: '/api/todos',
      payload: {
        title: 'Test todo',
        description: 'Test description',
      },
    });

    expect(response.json()).toMatchObject({
      title: 'Test todo',
      description: 'Test description',
    });
    expect(response.statusCode).toBe(201);
    instance.close();
  });

  it('should fail to create a todo without title', async () => {
    const instance = await app({ logger: true });
    const response = await instance.inject({
      method: 'POST',
      url: '/api/todos',
      payload: {
        description: 'Test description',
      },
    });

    expect(response.statusCode).toBe(400);
    instance.close();
  });

  it('should be able to create a todo without description', async () => {
    const instance = await app({ logger: true });
    const response = await instance.inject({
      method: 'POST',
      url: '/api/todos',
      payload: {
        title: 'Test todo',
      },
    });
    expect(response.json()).toMatchObject({
      title: 'Test todo',
    });
    expect(response.statusCode).toBe(201);
    instance.close();
  });
});
