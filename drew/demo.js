//console.log(process.argv);

var a = process.argv[2];
var b = process.argv[3];
var c = undefined;

var multiply = function(first, second, callback) {
	setTimeout(function() {
		c = first * second;
		callback(c);
	}, 2000);
	
}

var report = function(value) {
	console.log(value);
}

multiply(a, b, report);