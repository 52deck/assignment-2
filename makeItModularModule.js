var path = require('path');
var fs = require('fs');

module.exports = function (dirName, extention, callback) {
	
	var list = fs.readdir(dirName, function cb (err, list) {
		if (err) {
			callback(err, null);
		} else {
			var filteredList = []
			var ext = '.' + extention;
			for (var i = 0; i < list.length; i++) {
				if (path.extname(list[i]) == ext) filteredList.push(list[i]); 
			};
			callback(null, filteredList);
		}
	});
};