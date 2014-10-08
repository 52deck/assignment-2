var net = require('net');
var zeroAdd = function (num)
{
	if (num < 10) num = '0' + num;
	return num;
}
var server = net.createServer(function (socket) {
	var date = new Date();
	var dateTimeStamp = date.getFullYear() + "-" + zeroAdd(date.getMonth() + 1) + "-" + zeroAdd(date.getDate()) + " " + zeroAdd(date.getHours()) + ":" + zeroAdd(date.getMinutes()) +"\n";
	socket.end(dateTimeStamp);
});
server.listen(Number(process.argv[2]));