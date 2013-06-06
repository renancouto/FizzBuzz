'use stric';

module.exports = {
	InserirValor: function (valor) {
		var isFizz = valor % 3 === 0,
			isBuzz = valor % 5 === 0,
			isFizzBuzz = (valor % 3 === 0) && (valor % 5 === 0);

		if (isFizzBuzz) return 'FIZZBUZZ';
		if (isFizz) return 'FIZZ';
		if (isBuzz) return 'BUZZ';

		return null;
	}
};