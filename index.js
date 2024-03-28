const express = require('express');
const nodemailer = require("nodemailer");

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.send('App works!!');
});


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

//  res.json({
//       msg: "Error",
//       Code: 404,
//       err: error,
//     });
app.listen(port, (err) => {
  console.log(`running server on from port:::::::${port}`, err);
})