const supertest = require('supertest')
const express = require('express')
const branches = require('./mock')
const axios = require("axios")

jest.mock("axios");

const app = express();
it('Check if method type is GET', () => {
    const res = supertest(app).get('/getBranch').set({'lbg-txn-branch-location': 'london'});
    expect(res['method']).toEqual("GET");
});

it('when API call is successful', async () => {
        app.get('/getBranch', function (req, res) {
        res.json(branches);
        });
        const result = await supertest(app).get('/getBranch').set({'lbg-txn-branch-location': 'london'});
        console.log('result:'+JSON.stringify(result));
        expect(result['text']).toEqual(JSON.stringify(branches));
});
