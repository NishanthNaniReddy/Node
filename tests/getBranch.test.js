const supertest = require('supertest')
const app = require('../app.js')

jest.mock('../api/getBranch', () => jest.fn((req, res, next) => res.json({})));
it('Check if method type is GET', () => {
    expect(1).toBe(1)
    const res = supertest(app).get('/getBranch').set({'lbg-txn-branch-location': 'london'});
    expect(res['method']).toEqual("GET");
    console.log('res:'+JSON.stringify(res));
});