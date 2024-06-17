//Elaborar um programa que leia um número - que deve ser uma centena. Calcule e exiba a centena invertida.
//Caso o número não seja uma centena, exiba mensagem.
const prompt = require("prompt-sync")();
const numero = Number(prompt("Número (centena): "));
if (numero < 100 || numero >= 1000) {
  console.log("Erro... deve se uma centena");
  return;
}
const num1 = Math.floor(numero / 100);
const sobra = numero % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10
console.log(`Invertido: ${num3}${num2}${num1}`);