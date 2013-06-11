'use stric';

module.exports = {
	InserirValor: function (valor) {
		var isFizz = valor % 3 === 0,
			isBuzz = valor % 5 === 0,
			isFizzBuzz = (valor % 3 === 0) && (valor % 5 === 0);

		if (isFizzBuzz) return 'FIZZBUZZ';
		else if (isFizz) return 'FIZZ';
		else if (isBuzz) return 'BUZZ';
		else return valor;
	}
};