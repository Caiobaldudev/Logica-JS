//Uma farmácia necessita de um programa que leia o total de uma compra.
//Exiba como resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o
//valor de cada parcela. Considere as seguintes condições: a) cada parcela deve ser de, no mínimo, R$20,00
//b) o número máximo de parcelas permitido é 6.
const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor da Compra R$: "));
const aux = Math.floor(valor / 20);
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valorParcela = valor / parcelas;
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);