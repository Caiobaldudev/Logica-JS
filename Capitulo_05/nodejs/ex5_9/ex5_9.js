// Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto. Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha.
const prompt = require('prompt-sync')();
const produto = prompt('Produto: ');
const num = Number(prompt('Nº de Etiquetas: '))

for (let i = 1; i <= num / 2; i++) {
  console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`);
}
if (num % 2 == 1) {
  console.log(produto);
}