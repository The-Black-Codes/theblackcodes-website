const server = require('express')();
const parser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

server.use(cors());
server.use(parser.urlencoded({ extended: false }));
server.use(parser.json());

server.get('/', (req, res) => res.send('Working'));

server.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  await axios.post("https://hooks.slack.com/services/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", {
    username: 'The Black.Codes Contact Form',
    text: `Name: ${name} \n Email: ${email} \n Message: ${message}`
  });
  res.json({ message: 'Done!!' });
});

server.listen(8001, _ => console.log('Running on port 8001'));