
var express = require('express');
var app = require('./app');
var http = require('http');
var path = require('path');

var port = (parseInt(process.env.PORT) || 3000);




var server = http.createServer(app);
server.listen(port);

