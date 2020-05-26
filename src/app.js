'use strict';

const express = require('express');
const morgan = require('morgan');

const keys = require('./keys');

const app = express();

app.set('port', keys.port);

app.use(morgan('dev'));

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello world' });
});

app.listen(
  app.get('port'),
  console.log(`> Server running on http://localhost:${app.get('port')}`)
);
