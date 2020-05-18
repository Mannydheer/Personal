const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const fetch = require('isomorphic-fetch');
require('dotenv').config();
const cors = require('cors')({ origin: true });

admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});
exports.handleMail = functions.https.onRequest((req, res) => {

    cors(req, res, () => {

        let name = req.body.name;
        let contactEmail = req.body.email;
        let contactMessage = req.body.message;

        const mailOptions = {
            from: `${contactEmail}`,
            to: process.env.EMAIL,
            subject: `MANNY PORTOFLIO - EMAIL- ${contactEmail}`,
            html: `<p>${contactMessage} The email is: ${contactEmail} Name: ${name}</p>`
        };

        return transporter.sendMail(mailOptions, function (error, info) {
            console.log(error)
            if (error) {
                return res.status(400).json({ status: 400, message: "Oops something went wrong... Click on the link below!" })
                console.log(error);
            } else {
                return res.status(200).json({ status: 200, message: "Thank you, I will be in touch very soon!" })
                console.log('Email sent: ' + info.response);
            }
        });
    })
})
exports.handleToken = functions.https.onRequest((req, res) => {

    cors(req, res, () => {
        //validate recpatcha token.
        fetch(`https://recaptcha.google.com/recaptcha/api/siteverify?response=${req.body.response}&secret=${process.env.RECPATCHA_SECRET}`, {
            method: 'post',
            //headers?

        })
            .then((res) => {
                console.log(res, 'res')
                return res.json()
            })
            .then((data) => {
                if (!data.success) {
                    res.status(400).json({ status: 400 })
                }
                else res.status(200).json({ status: 200, apiResponse: data })
            })


    })
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


