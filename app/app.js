
// var connect = require('connect'),
//   path = require('path');

// connect.createServer(
//   connect.static(path.join(__dirname, 'public'))
// ).listen(8888, function() {
//   console.log("Server listening");
// });


var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen(5000, function() { console.log('listening')});