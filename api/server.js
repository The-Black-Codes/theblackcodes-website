const server = require('express')();
const parser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const nodemailer = require('nodemailer');

require('dotenv').config();
const key = require('./key.json');

server.use(cors());
server.use(parser.urlencoded({ extended: false }));
server.use(parser.json());

server.get('/', (req, res) => res.send('Working'));

server.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.SG_EMAIL,
      serviceClient: key.client_id,
      privateKey: key.private_key
    }
  });

  let sendEmail;
  const options = {
    from: `The Black Codes Contact Form - ${process.env.SG_EMAIL}`,
    to: process.env.SG_EMAIL,
    subject: 'From The Black.Codes Contact Form',
    html: `<div>
            <h3>Name: ${name} - ${email}</h3></div>
            <h4>Message: <br />${message}</h4>
          </div>`
  };
  
  try {
    await transporter.verify();
    sendEmail = await transporter.sendMail(options, async (err, info) => {
      if (err) return res.json({ err: true, message: err });
  
      await axios.post("https://hooks.slack.com/services/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", {
        username: 'The Black.Codes Contact Form',
        text: `Name: ${name} \n Email: ${email} \n Message: ${message}`
      }).catch(e => res.json({ err: true, message: e }));
    });
  } catch (err) {
    console.error(err);
    return res.json({ err: true, message: err });
  });
});

server.listen(8001, _ => console.log('Running on port 8001'));