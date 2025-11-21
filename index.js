
const express = require('express');

const userCreate = require('./routes/userCreate');

const userRead = require('./routes/userRead');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/public', express.static('public'));

app.use('/create', userCreate);

app.use('/read', userRead);

module.exports = app;