'use strict';

const fs = require('fs'),
      https = require('https'),
      path = require('path');

const server = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'keys', 'privateKey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'keys', 'certificate.pem'))
}, (req, res) => {
  console.log(req.method); // GET, POST, PUT, ...
  console.log(req.url);

  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('<h1>Hallo aus Node.js</h1>');
  res.write('<p>Lorem ipsum …</p>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server started on port 3000...');
});
