const express = require('express');
const nodemailer = require("nodemailer");
const path = require('path');
const serverless = require("serverless-http");
const app = express();
const port = 5000;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/.netlify/functions/app", router);

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
app.get('/api', async function(req, res, next) {
let mail = "sparshtandon2409@gmail.com"



  const info = await transporter.sendMail({
    from: `"Sparsh Tandon 👻" <${mail}>`, // sender address
    to: "snowmansparsh4@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  res.send('respond with a resource')
})

module.exports.handler = serverless(app);
// app.listen(port, (err) => {
//   console.log(`running server on port::${port}`);
// })