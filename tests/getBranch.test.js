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
        expect(result['status']).toEqual(200);
        expect(result['text']).toEqual(JSON.stringify(branches));
});

it('when API call is unsuccessful', async () => {
    app.get('/getBranch', function (req, res, next) {
    res.json({});
    });
    const result = await supertest(app).get('/getBranch').set({'lbg-txn-branch-location': 'london'});
    expect(result['status']).toEqual(200);
    expect(result['text']).toEqual("{}");
});