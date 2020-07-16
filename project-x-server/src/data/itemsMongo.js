fs = require('fs')

const Logger = require('../services/loggerService');
const logger = new Logger('app')

fs.readfile('itemList.json', 'utf8', function(err, data) {
    if (err) {
        logger.error('Error opening file', err)
    }

    var parsedData = JSON.parse(data);
    
});