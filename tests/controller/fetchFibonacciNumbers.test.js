const request = require('supertest');
const app = require('../../app');

describe('fetch fibonacci numbers', () => {
  test('should fetch fibonacci numbers successfully', async () => {
    const response = await request(app)
      .get('/api/v1/numbers')
    
    expect(response.status).toEqual(200)
    expect(response.body.message).toBe('Fibonacci numbers fetched successfully')
  });
});
