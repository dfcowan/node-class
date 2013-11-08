var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
	setTimeout(function () {
		console.log(request.url);
	}, 10);

	if(request.url == '/hello') {
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end("<h1>Hello World!</h1>" + request.url);
	}
	else {
		response.writeHead(404);
		response.end("<h1>" + request.url + " not found!</h1>");
	}
});

server.listen(3000);

console.log('server started');
