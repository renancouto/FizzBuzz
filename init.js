var base = require('./fizzbuzz/base.js'),
	args = process.argv;

args.shift();
args.shift();

for (var i in args) {
	var r = base.InserirValor(args[i]);
	if (r) console.log(args[i], r);
}