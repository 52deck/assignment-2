var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function cb (err, list){
	if (err) throw err;
	var ext = '.' + process.argv[3];
	for (var i = 0; i < list.length; i++) {
		if (path.extname(list[i]) == ext) console.log(list[i]); 
	};
})