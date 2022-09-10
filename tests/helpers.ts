import { app } from '../src/app';

export const build = () => {
  const instance = app();
  beforeAll(async () => {
    await instance.ready();
  });

  afterAll(async () => {
    await instance.close();
  });
  return instance;
};
