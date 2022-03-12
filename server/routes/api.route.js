const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const apiRoute = express.Router();

//Mailjet Keys
// const MJ_APIKEY_PUBLIC='77e6a56444b50c0566f3553ad62e1c32';
// const MJ_APIKEY_PRIVATE='0d97efcfd728db13f5ca5aa7caef6514';

app.use(
    cors({
    origin: "*"
}));

let transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: "info@vinayone.com",
      pass: "6mtYtWKsa8g1",
    },
  });


// Add Employee
// apiRoute.route('/mail').post((req, res, next) => {
//    const mailjet = require('node-mailjet')
//    .connect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE)
//    const request = mailjet
//     .post("send", {'version': 'v3.1'})
//     .request({
//         "Messages":[{
//             "From": {
//                 "Email": "info@vinayone.com",
//                 "Name": req.body.name
//             },
//             "To": [{
//                 "Email": "info@vinayone.com",
//                 "Name": "VinayONE"
//             }],
//             "Subject": "VinayONE Contact Mail!",
//             //"TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
//             "HTMLPart": `<h3>Dear Vinay Kumar Munda,</h3><h2>You\'ve New Contact Mail!</h2><br /><p>From: ${req.body.name}<br />Contact Number: ${req.body.contactnumber}<br />Email: ${req.body.email}<br />How found me?: ${req.body.howfoundme}<br />Message: ${req.body.feedback}</p>`
//         }]
//     })
// request
//     .then((result) => {
//         console.log(result.body)
//     })
//     .catch((err) => {
//         console.log(err.statusCode)
//     })
// });

apiRoute.route('/mail').post((req, res, next) => {
    transporter.sendMail({
        from: "info@vinayone.com",
        to: "inbox@vinayone.com",
        subject: "Vinayone Contact Mail!",
        html: `<h3>Dear Vinay,</h3><h2>You\'ve New Contact Mail!</h2><br /><p>From: ${req.body.name}<br />Contact Number: ${req.body.contactnumber}<br />Email: ${req.body.email}<br />How found me?: ${req.body.howfoundme}<br />Message: ${req.body.feedback}</p>`
    })
    res.send({message: 'Success!'})
});

module.exports = apiRoute;