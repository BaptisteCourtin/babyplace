require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  sevice: `${process.env.MAIL_SERVICE}`,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

module.exports = transporter;