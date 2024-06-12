//Elaborar um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe a média das notas.
const nota1 = Number(prompt("Nota 1: ")); //dado de entrada
const nota2 = Number(prompt("Nota 2: ")); //dado de entrada
const media = (nota1 + nota2) / 2; //Calcula a média.
alert(`1º Nota: ${nota1.toFixed(2)}`); //Exibe a nota 1.
alert(`2º Nota: ${nota2.toFixed(2)}`); //Exibe a nota 2.
alert(`Média: ${media.toFixed(2)}`); //Exibe a média.