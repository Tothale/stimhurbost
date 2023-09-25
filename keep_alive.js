var http = require('http');

http.createServer(function (req, res) {
  res.write("Working!");
  res.end();
}).listen(8080);
