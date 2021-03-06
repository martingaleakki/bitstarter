//Added by Akhil Lodha - lodhaakhil85@gmail.com
var express = require('express');
var fs = require('fs'); 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html');
  response.send(text.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
