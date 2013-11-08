var events = require('events');
var myEventEmitter = new events.EventEmitter();

var greeting = function() {
	console.log("I'm here!");
	setTimeout(function () {
		console.log('Hello World!');
	}, 1000);
}

var inquiry = function() {
	console.log('How are you?');
}

myEventEmitter.once('announce', greeting);
myEventEmitter.on('announce', inquiry);

setTimeout(function () {
	myEventEmitter.emit('announce');
}, 1000);

// greeting();
// inquiry();

setInterval(function() {
	myEventEmitter.emit('announce');
}, 500);