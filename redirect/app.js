'use strict';

const http = require('http');

const bodyParser = require('body-parser'),
      cors = require('cors'),
      express = require('express');

const logger = require('./logger'),
      mappings = require('./mappings'),
      packageJson = require('./package');

console.log(`${packageJson.name} ${packageJson.version} up and running :-)`);

const app = express();

app.use(logger);
app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const mapping = req.body;

  const alias = mapping.alias;
  const targetUrl = mapping.targetUrl;

  mappings[alias] = targetUrl;

  res.status(200).end();
});

// app.post('/', (req, res) => {
//   req.setEncoding('utf8');
//
//   let body = '';
//
//   req.on('data', data => {
//     body += data;
//   });
//
//   req.on('end', () => {
//     const mapping = JSON.parse(body);
//
//     const alias = mapping.alias;
//     const targetUrl = mapping.targetUrl;
//
//     mappings[alias] = targetUrl;
//
//     res.status(200).end();
//   });
// });

app.get('/', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.write('<table>');

  const aliases = Object.keys(mappings);

  aliases.forEach(alias => {
    res.write(`
      <tr>
        <td>${alias}</td>
        <td>${mappings[alias]}</td>
      </tr>
    `);
  });

  res.write('</table>');
  res.end();
});

app.get('/:alias', (req, res) => {
  const alias = req.params.alias;
  const targetUrl = mappings[alias];

  if (!targetUrl) {
    res.status(404).send('Mapping not found.');
    return;
  }

  res.redirect(307, targetUrl);
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server started...');
});
