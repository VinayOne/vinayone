const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const apiRoute = express.Router();

app.use(
    cors({
    origin: "*"
}));

let transporter = nodemailer.createTransport({
    host: "in-v3.mailjet.com",
    port: 587,
    secure: false, // use TLS
    auth: {
      user: "77e6a56444b50c0566f3553ad62e1c32",
      pass: "92149bc982866de5f94075411b29024c",
    },
  });

apiRoute.route('/mail').post((req, res, next) => {
    transporter.sendMail({
        from: "info@vinayone.com",
        to: "inbox@vinayone.com",
        subject: "VINAYONE CONTACT MAIL!",
        html: `<h3>Hi Vinay,</h3><h2>You\'ve New Contact Mail!</h2><br /><p>From: ${req.body.name}<br />Contact Number: ${req.body.contactnumber}<br />Email: ${req.body.email}<br />How found me?: ${req.body.howfoundme}<br />Message: ${req.body.feedback}</p>`
    })
    res.send({message: 'Success!'})
});

module.exports = apiRoute;