'use strict';

const fs = require('fs'),
      https = require('https'),
      path = require('path');

const express = require('express');

const articles = [
  { title: 'iPhone 7', price: 1099 },
  { title: 'iPhone 7 Plus', price: 1199 }
];

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hallo aus Express</h1>');
});

app.get('/articles/:index', (req, res) => {
  const index = req.params.index;

  res.json(articles[index]);
});

app.get('/articles', (req, res) => {
  res.json(articles);
});

const server = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'keys', 'privateKey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'keys', 'certificate.pem'))
}, app);

server.listen(3000, () => {
  console.log('Server started on port 3000...');
});
