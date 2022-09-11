import { app } from '../src/app';

export const build = async () => {
  const instance = await app();
  beforeAll(() => {
    instance.ready();
  });

  afterAll(() => {
    instance.close();
  });
  return instance;
};
