
const bureauCaller = require('../../src/services/bureauCaller');

describe('The Bureau Caller', () => {
  beforeEach(() => {
    bureauCaller.callBureau = jest.fn(() => Promise.resolve({ report: '1234abcd', otherReport: '1234abcd' }));
  });
  test('Should proxy request to bureau', async () => {
    const res = await bureauCaller.proxy('1234abcd', '{"cardNumber": "NovaDataCC"}', 'json', 'testBureau.com');
    expect(res).toEqual({ report: 'NovaDataCC', otherReport: 'NovaDataCC' });
    expect(bureauCaller.callBureau).toBeCalledWith('testBureau.com', '{"cardNumber": "1234abcd"}');
  });
});
