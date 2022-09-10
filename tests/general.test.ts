import { build } from './helpers';

const app = build();

describe('General', () => {
  it('should return 200 when checking health of the application', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/health',
    });
    expect(response.statusCode).toBe(200);
  });
});
