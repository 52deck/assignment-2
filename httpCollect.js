var http = require('http');
http.get(process.argv[2], function callback (response) {
	response.setEncoding("utf8");
	var totalData = "";
	response.on("data", function (data) {
		totalData += data;
	})

	response.on("error", console.error)

	response.on("end", function (end) {
		console.log(totalData.length);
		console.log(totalData);
	})
});