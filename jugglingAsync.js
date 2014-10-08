var http = require('http');
var allData = [];

var print = function () {
	for (var i = 0; i < allData.length; i++) {
		console.log(allData[i]);
	};
}

http.get(process.argv[2], function callback (response) {
	response.setEncoding("utf8");
	var totalData = "";
	response.on("data", function (data) {
		totalData += data;
	})

	response.on("error", console.error)

	response.on("end", function (end) {
		allData[0] = totalData;
		if (allData[1] && allData[2]) {
			print();
		};
	})
});
http.get(process.argv[3], function callback (response) {
	response.setEncoding("utf8");
	var totalData = "";
	response.on("data", function (data) {
		totalData += data;
	})

	response.on("error", console.error)

	response.on("end", function (end) {
		allData[1] = totalData;
		if (allData[0] && allData[2]) {
			print();
		};
	})
});

http.get(process.argv[4], function callback (response) {
	response.setEncoding("utf8");
	var totalData = "";
	response.on("data", function (data) {
		totalData += data;
	})

	response.on("error", console.error)

	response.on("end", function (end) {
		allData[2] = totalData;
		if (allData[1] && allData[0]) {
			print();
		};
	})
});

