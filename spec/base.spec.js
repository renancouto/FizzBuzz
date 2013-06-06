describe('Teste de base.js', function(){
	var base;

	beforeEach(function(){
		base = require('../fizzbuzz/base.js');
	});

	it('FIZZ', function(){
		var valorInicial = 3;
		var resultado = base.InserirValor(valorInicial);

		expect(resultado).toBe('FIZZ');
	});

	it('BUZZ', function(){
		var valorInicial = 5;
		var resultado = base.InserirValor(valorInicial);

		expect(resultado).toBe('BUZZ');
	});

	it('FIZZBUZZ', function(){
		var valorInicial = 15;
		var resultado = base.InserirValor(valorInicial);

		expect(resultado).toBe('FIZZBUZZ');
	});

	it('Errado', function(){
		var valorInicial = 4;
		var resultado = base.InserirValor(valorInicial);

		expect(resultado).toBeNull();
	});
});