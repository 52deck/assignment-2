var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var splitStr = str.split('\n');

var newLines = splitStr.length - 1;

console.log(newLines);