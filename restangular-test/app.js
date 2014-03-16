
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
app.use(app.controller);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var goods = [
  { id: 1, name: 'apple', type: 'fruit', remain: 18 },
  { id: 2, name: 'banana', type: 'fruit', remain: 282 },
  { id: 3, name: 'orange', type: 'fruit', remain: 92 },
  { id: 4, name: 'chip', type: 'junk food', remain: 293},
  { id: 5, name: 'biscuit', type: 'junk food', remain: 88 }
]

app.get('/api/v1/goods', function(req, res) {
  res.json(goods);
});

app.get('/api/v1/goods/:goodId', function(req, res) {
  res.json(goods[req.params['goodId'] - 1]);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
