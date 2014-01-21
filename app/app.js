
var connect = require('connect'),
  path = require('path');

connect.createServer(
  connect.static(path.join(__dirname, 'public'))
).listen(8888, function() {
  console.log("Server listening");
});