const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const apiRoute = express.Router();

apiRoute.use(
  cors({
    origin: '*',
  }),
);

const transporter = nodemailer.createTransport({
  host: process.env.RESEND_SMTP_HOST || 'smtp.resend.com',
  port: Number(process.env.RESEND_SMTP_PORT || 465),
  secure: String(process.env.RESEND_SMTP_SECURE || 'true') === 'true',
  auth: {
    user: process.env.RESEND_SMTP_USER || 'resend',
    pass: process.env.RESEND_API_KEY || '',
  },
});

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

apiRoute.post('/mail', async (req, res) => {
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).send({
      message: 'RESEND_API_KEY is not configured on the server.',
    });
  }

  const { name, contactnumber, email, howfoundme, feedback } = req.body ?? {};

  if (!name || !contactnumber || !email || !howfoundme || !feedback) {
    return res.status(400).send({
      message: 'Please provide all required contact fields.',
    });
  }

  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
  const to = process.env.CONTACT_TO_EMAIL || 'inbox@vinayone.com';

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: escapeHtml(email),
      subject: 'VINAYONE CONTACT MAIL!',
      html: `<h3>Hi Vinay,</h3>
<h2>You've New Contact Mail!</h2>
<br />
<p>
  From: ${escapeHtml(name)}<br />
  Contact Number: ${escapeHtml(contactnumber)}<br />
  Email: ${escapeHtml(email)}<br />
  How found me?: ${escapeHtml(howfoundme)}<br />
  Message: ${escapeHtml(feedback)}
</p>`,
    });

    return res.send({ message: 'Success!' });
  } catch (_error) {
    return res.status(500).send({ message: 'Failed to send email.' });
  }
});

module.exports = apiRoute;
