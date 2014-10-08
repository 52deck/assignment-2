var http = require('http');
var fs = require('fs');
var map = require('./node_modules/through2-map/index.js');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	if(req.method === 'POST')
	{
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);
	} else {
		return res.end("Please Send a POST")
	}
});
server.listen(Number(process.argv[2]));