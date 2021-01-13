const server = require('express')();
const parser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

require('dotenv').config();
const { SG_EMAIL, G_PASS, CLIENT_ID, CLIENT_SECRET, CLIENT_URL } = process.env;
const key = require('./key.json');

server.use(cors());
server.use(parser.urlencoded({ extended: false }));
server.use(parser.json());
console.log('id', process.env.SG_EMAIL);
const my0Auth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, CLIENT_URL);
my0Auth2Client.setCredentials({
  refresh_token: key.refresh_token
});

const myAccessToken = my0Auth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: "OAuth2",
    user: SG_EMAIL,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: key.refresh_token,
    accessToken: myAccessToken
  }
});

server.get('/', (req, res) => res.send('Working'));

server.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const options = {
    from: 'noreply@theblackcodes.org',
    to: SG_EMAIL,
    subject: 'From The Black.Codes Contact Form',
    html: `<div>
            <h3>Name: ${name} - ${email}</h3></div>
            <h4>Message: <br />${message}</h4>
          </div>`
  };
  
  try {
    await transporter.verify();
    await transporter.sendMail(options, async (err, info) => {
      console.log('err', err);
      console.log('info', info);
      if (err) return res.json({ err: true, message: err, name: 'sendMail' });
      
      // await axios.post("https://hooks.slack.com/services/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", {
      //   username: 'The Black.Codes Contact Form',
      //   text: `Name: ${name} \n Email: ${email} \n Message: ${message}`
      // }).catch(e => res.json({ err: true, message: e , name: 'Slack' }));
    });
  } catch (err) {
    console.error(err);
    return res.json({ err: true, message: err, name: 'Mailer' });
  }
});

server.listen(8001, _ => console.log('Running on port 8001'));