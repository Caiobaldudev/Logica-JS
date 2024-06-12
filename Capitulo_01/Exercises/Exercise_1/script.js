//Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e posteior.
const num = Number(prompt("Número: ")); //lê o dado de entrada
const anterior = num - 1; //Calcula o anterior.
const posterior = num + 1; //Calcula o posterior.
alert(`O número anterior de ${num} é ${anterior}`); //Exibe o resultado anterior
alert(`O número posterior de ${num} é ${posterior}`); //Exibe o resultado posterior
//ou
alert(`Vizinhos: ${anterior} e ${posterior}`)