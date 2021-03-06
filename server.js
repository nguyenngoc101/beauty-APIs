
/**
 * Module dependencies
 */

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/config');

var app = express();
var port = process.env.PORT || 3000;

// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(config.db, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Set router for app
require('./app/routes')(app);

app.listen(port);
console.log('Express app started on port ' + port);
