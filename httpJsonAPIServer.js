var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	var reqUrl = url.parse(req.url, true);
	var date = new Date(reqUrl.query.iso);
	if(reqUrl.pathname === '/api/parsetime')
	{
		res.end(JSON.stringify({"hour": date.getHours(),"minute": date.getMinutes(),"second": date.getSeconds()}));
	} else if (reqUrl.pathname === '/api/unixtime'){
		res.end(JSON.stringify({ "unixtime": date.getTime() }));
	} else {
		return res.end("Please Send to the correct URL");
	}
});
server.listen(Number(process.argv[2]));