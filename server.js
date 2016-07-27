var express = require('express');
var mongoose = require('mongoose');
var env = require('./config/env').dev;
var bodyParser = require('body-parser')

// Connect to MongoDB
mongoose.connect(env.mongo_connection_string);
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  }
);

// Setup server
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var server = require('http').createServer(app);

require('./routes')(app);

// Start server
server.listen(process.env.PORT || env.serverport, function () {
  console.log('Express server listening');
});
