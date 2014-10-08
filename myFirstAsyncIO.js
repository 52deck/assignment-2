var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function cb (err, data){
	if (err) throw err;
	var splitData = data.split('\n');
	var newLines = splitData.length - 1;
	console.log(newLines);
});
