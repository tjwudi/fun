
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/login', function(req, res) {
  if (req.body.username !== 'username') {
    res.json({status: 'username_incorrect'});
  }
  else if (req.body.password !== 'password') {
    res.json({status: 'password_incorrect'});
  }
  else {
    res.json({status: 'ok'});
  }
});

var users = [ { name: 'John Wu', gender: 'male' } ,
              { name: 'Alizabath Hu', gender: 'male'},
              { name: 'Gu Xin', gender: 'female'} ,
              { name: 'Alex Xu', gender: 'female'} ,
              { name: 'Tom Hu', gender: 'female' } ];
app.get('/users/:uid', function(req, res) {
  res.json(users[req.params.uid]);
});
app.get('/users', function(req, res) {
  res.json(users);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
