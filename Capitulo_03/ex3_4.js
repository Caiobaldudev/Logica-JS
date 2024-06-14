const prompt = require('prompt-sync')(); //Node package
const pesoKg = Number(prompt('Peso da Ração (kg): '))
const consumo = Number(prompt('Consumo Diário(gr): '))
const pesoGr = pesoKg * 1000;
const duracao = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo;
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);