'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = 4000;


const { handleInformation } = require('./controllers/form-controller')


var app = express()
app.use(function (req, res, next) {
    res.header(
        'Access-Control-Allow-Methods',
        'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
})
app.use(morgan('tiny'))
app.use(express.static('./server/assets'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(__dirname + '/'))

app.post('/submitInfo', handleInformation)



    .listen(PORT, () => console.info(`Listening on port ${PORT}`));
