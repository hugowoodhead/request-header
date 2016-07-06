var express = require('express');
var app = express();
var moment = require('moment');

app.get('/', function(req, res){
  res.send('hello world');
});

app.param('str', function (req, res, next, value) {
  res.send({
    natural: moment(value).format('MMMM Do, YYYY'),
    unix: moment(value).format('x')
  });
  next();
});

app.get('/:str', function (req, res, next) {
  next();
});

app.listen(8080, function(){
  console.log('server listening on 8080');
});
