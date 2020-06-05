const server = require('express')();
const parser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const nodemailer = require('nodemailer');

require('dotenv').config();

server.use(cors());
server.use(parser.urlencoded({ extended: false }));
server.use(parser.json());

server.get('/', (req, res) => res.send('Working'));

server.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  const client = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SG_USER,
      pass: process.env.G_PASS
    }
  });

  client.sendMail({
    from: process.env.SG_EMAIL,
    to: process.env.SG_EMAIL,
    subject: 'From The Black.Codes Contact Form',
    html: `<div>
            <h3>Name: ${name} - ${email}</h3></div>
            <h4>Message: <br />${message}</h4>
          </div>`
  }, async (err, info) => {
    if (err) {
      console.log(err);
    }

    await axios.post("https://hooks.slack.com/services/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", {
      username: 'The Black.Codes Contact Form',
      text: `Name: ${name} \n Email: ${email} \n Message: ${message}`
    })
    .catch(e => res.json({ err: true, message: e }));
    return res.json({ err: null, message: 'Done!!' });
  });
});

server.listen(8001, _ => console.log('Running on port 8001'));