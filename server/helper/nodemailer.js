const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bagginsbilbo938@gmail.com",
    pass: "aueqnplgktqhlnul",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
