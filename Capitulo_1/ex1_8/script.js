 //Elaborar um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em número de horas.
 const dias = Number(prompt('Nº Dias: '))//dados de entrada.
 const horas = Number(prompt('Nº Horas: '))
 const duracao = (dias * 24) + horas //calcula a duração
 alert(`Total de Horas: ${duracao}`)