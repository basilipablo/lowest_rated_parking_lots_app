const express = require('express');
const routes = require('./index.js');
const server = express()
require('dotenv').config()

server.use((req, res, next) => {
    //4200 para Angular y 3000 para React
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use('/', routes);

server.listen(3001, () => {
    console.log('%s listening at 3001');
});
