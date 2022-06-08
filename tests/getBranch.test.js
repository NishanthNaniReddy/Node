const request = require('supertest')
const app = require('../index.js')
const express = require('express');
// const { branches } = require('./mock.js')
// describe('GET Endpoints', () => {
//     it("when location is missing", async ()  => {
//         const response = await request(app).get('/getBranch');
//         // expect(response.error.message).toEqual("ValidationError: \"lbg-txn-branch-location\" is not allowed to be empty");
//     });

// })