'use strict';

var path = require('path');

module.exports = function(app) {
  app.use('/api/listing_detail', require('./api/listing_detail'));
};
