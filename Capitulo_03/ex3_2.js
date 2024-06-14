const prompt = require('prompt-sync')(); //Node package
const veiculo = prompt('Veículo: ');
const preco = Number(prompt('Preço R$: '));
const entrada = preco * 0.50;
const parcela = (preco * 0.50) / 12;
console.log(`Promoçao ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(2)}`);