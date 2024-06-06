 //Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
 const conta = Number(prompt("Valor da conta: ")); //dado de entrada
 const clientes = Number(prompt("Número de clientes: ")); //dado de entrada
 const valor = conta / clientes; //Calcula o valor a ser pago por cliente.
 alert(`Valor a ser pago por cliente: R$ ${valor.toFixed(2)}`); //Exibe o valor a ser pago por cliente.