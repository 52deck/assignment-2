
var myModule = require('./makeItModularModule.js');

myModule(process.argv[2], process.argv[3], function callback (err, list){
	if (err) throw err;
	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	};
});