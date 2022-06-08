// const CustomerService = require('../services/customer-service');
// const  UserAuth = require('./middlewares/auth');

const express = require('express');
const cors  = require('cors');
const { getBranch } = require('./api');
const HandleErrors = require('./error-handler')


module.exports = async (app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //api
    getBranch(app);

    // error handling
    app.use(HandleErrors);
    
}