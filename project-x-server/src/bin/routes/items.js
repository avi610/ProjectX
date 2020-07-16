var express = require('express');
var router = express.Router();
var request = require('request');

const Logger = require('../services/loggerService');
const logger = new Logger('app')

router.get('/', function(req, res, next) {
  
});

router.get('/item/:id', function(req, res, next) {
  itemId = req.params.id;
  baseUrl = 'http://services.runescape.com/m=itemdb_oldschool';
  itemUrl = '/api/catalogue/detail.json?item=';
  
  logger.info('Sending ', baseUrl + itemUrl + itemId);

  request(baseUrl + itemUrl + itemId , function (error, response, body) {
    if (error) {
      logger.error('error:', error); // Print the error if one occurred and handle it
    }
    res.send(body)
  });
});

module.exports = router;