var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "sparshtandon2409@gmail.com",
    pass: "bjrq fjfj jvyv vmwp"
  },
});

/* GET users listing. */
router.get('/', async function(req, res, next) {
let mail = "sparshtandon2409@gmail.com"



  const info = await transporter.sendMail({
    from: `"Sparsh Tandon 👻" <${mail}>`, // sender address
    to: "snowmansparsh4@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  
  res.send('respond with a resource')
});

module.exports = router;
