var express = require('express');
var morgan = require('morgan'); 
var cookieParser = require('cookie-parser');
var indexRouter = require('./bin/routes/index');
var itemsRouter = require('./bin/routes/items');
const Logger = require('./bin/services/loggerService');
const bodyParser = require('body-parser');

var app = express();
const logger = new Logger('app')
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/items', itemsRouter);

module.exports = app;