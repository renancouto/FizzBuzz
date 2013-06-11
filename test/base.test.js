var assert = require('assert');

describe('Teste da solução', function(){
	var base;

	before(function(){
		base = require('../lib/base.js');
	});

	it('FIZZ', function(){
		var valorInicial = 3;
		var resultado = base.InserirValor(valorInicial);

		assert.equal('FIZZ', resultado);
	});

	it('BUZZ', function(){
		var valorInicial = 5;
		var resultado = base.InserirValor(valorInicial);

		assert.equal('BUZZ', resultado);
	});

	it('FIZZBUZZ', function(){
		var valorInicial = 15;
		var resultado = base.InserirValor(valorInicial);

		assert.equal('FIZZBUZZ', resultado);
	});
});