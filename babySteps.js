var sum = 0;
for (var i = 2;process.argv.length > i; i++) {
	sum += Number(process.argv[i]);
};
console.log(sum);