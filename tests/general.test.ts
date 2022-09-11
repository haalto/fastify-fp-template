import { app } from '../src/app';

describe('General', () => {
  it('should return 200 when checking health of the application', async () => {
    const instance = await app();
    const response = await instance.inject({
      method: 'GET',
      url: '/api/health',
    });
    expect(response.statusCode).toBe(200);
    instance.close();
  });
});
