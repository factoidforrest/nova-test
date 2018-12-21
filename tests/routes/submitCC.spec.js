const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../../app');


const privateKey = 'supersecret';


describe('Credit card routes', () => {
  let token;
  test('Should turn a CC into a token', () => request(app)
    .post('/credit-card/tokenize')
    .send({ cc: '12345678' })
    .expect(200)
    .then((res) => {
      expect(res.body).toHaveProperty('token');
      token = res.body.token; // eslint-disable-line
    }));


  test('Should submit to bureau with CC replaced', () => {
    const body = {
      token,
      type: 'json',
      template: JSON.stringify({
        cardNumber: 'NovaDataCC',
      }),
      endpoint: 'fakebureau.com/endpoint',
    };
    const payload = jwt.sign(body, privateKey, { expiresIn: 120 });
    return request(app)
      .post('/bureau/proxy')
      .send(
        { payload },
      )
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ bureau: 'report' });
      });
  });
});
