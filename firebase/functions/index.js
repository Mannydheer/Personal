const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors')({ origin: true });

admin.initializeApp();


var corsOptions = {
    origin: 'https://mannydheer.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});
exports.handleMail = functions.https.onRequest((req, res) => {

    console.log(process.env.EMAIL)
    cors(req, res, () => {


        let name = req.body.name;
        let contactEmail = req.body.email;
        let contactMessage = req.body.message;

        const mailOptions = {
            from: `${contactEmail}`,
            to: process.env.EMAIL,
            subject: `MANNY PORTOFLIO - EMAIL- ${name}`,
            html: `<p>${contactMessage}</p>`
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


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


