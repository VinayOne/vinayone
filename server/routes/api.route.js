const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const apiRoute = express.Router();

apiRoute.use(
  cors({
    origin: '*'
  })
);

const transporter = nodemailer.createTransport({
  host: process.env.RESEND_SMTP_HOST || 'smtp.resend.com',
  port: Number(process.env.RESEND_SMTP_PORT || 465),
  secure: String(process.env.RESEND_SMTP_SECURE || 'true') === 'true',
  auth: {
    user: process.env.RESEND_SMTP_USER || 'resend',
    pass: process.env.RESEND_API_KEY || ''
  }
});

apiRoute.route('/mail').post((req, res, next) => {
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).send({ message: 'RESEND_API_KEY is not configured on the server.' });
  }

  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
  const to = process.env.CONTACT_TO_EMAIL || 'inbox@vinayone.com';

  transporter
    .sendMail({
      from,
      to,
      replyTo: req.body.email,
      subject: 'VINAYONE CONTACT MAIL!',
      html: `<h3>Hi Vinay,</h3><h2>You've New Contact Mail!</h2><br /><p>From: ${req.body.name}<br />Contact Number: ${req.body.contactnumber}<br />Email: ${req.body.email}<br />How found me?: ${req.body.howfoundme}<br />Message: ${req.body.feedback}</p>`
    })
    .then(() => {
      res.send({ message: 'Success!' });
    })
    .catch(() => {
      res.status(500).send({ message: 'Failed to send email.' });
    });
});

module.exports = apiRoute;
