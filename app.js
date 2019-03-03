var express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const routes = require('./routes/index');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, 'dist/images', 'favicon.ico')));

app.use('/', routes);

module.exports = app;
