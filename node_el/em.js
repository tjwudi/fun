var util = require('util'),
    events = require('events');

var EventEmitter = events.EventEmitter;

function MyClass() {
  this.message = "I am using node.js event emitter"
}

util.inherits(MyClass, EventEmitter);

var mc = new MyClass();

mc.on('showMessage', function() {
  console.log(this.message);
});

mc.emit('showMessage');