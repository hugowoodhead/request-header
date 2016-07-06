var express = require('express');
var app = express();
var userParser = require('user-agent-parser');

app.get('/', function(req, res){
  var ip = req.ip;
  var lan = req.acceptsLanguages();
  var machine = req.headers['user-agent'];
  var soft = userParser(machine).os.name + '; ' + userParser(machine).os.version;
  var data = {
    ipaddress: ip,
    langagage: lan[0],
      software: soft
  }
  res.send(data);
});

app.listen(process.env.PORT || 8080);
