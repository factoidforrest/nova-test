const request = require('supertest');
const app = require('../../app');

describe('The Hello World Path', () => {
  test('Should respond to get with sample data', () => request(app)
    .get('/hello-world')
    .expect(200)
    .then((res) => {
      expect(res.body).toEqual({ hello: 'world' });
    }));
});
