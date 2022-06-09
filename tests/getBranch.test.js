const request = require('supertest')
const app = require('../app.js')


it('Testing to see if Jest works', async () => {
    expect(1).toBe(1)
    const res = await request(app).get('/getBranch');
    // console.log('res:'+res);
});