'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = 4000;


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

const handleMail = (req, res) => {
    let name = req.body.name;
    let contactEmail = req.body.email;
    let contactMessage = req.body.message;

    const mailOptions = {
        from: `${contactEmail}`,
        to: process.env.EMAIL,
        subject: `MANNY PORTOFLIO - EMAIL- ${name}`,
        text: `${contactMessage}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(400).json({ status: 400, message: "Oops something went wrong... Click on the link below!" })
            console.log(error);
        } else {
            res.status(200).json({ status: 200, message: "Thank you, I will be in touch very soon!" })
            console.log('Email sent: ' + info.response);
        }
    });

}


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

app.post('/submitInfo', handleMail)




    .listen(PORT, () => console.info(`Listening on port ${PORT}`));
