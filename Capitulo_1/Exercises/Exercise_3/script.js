//Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
const preco = Number(prompt("Preço do produto: ")); //dado de entrada
const desconto = preco * 0.10; //Calcula o desconto.
const vista = preco - desconto; //Calcula o valor à vista.
const parcela = preco / 3; //Calcula o valor da parcela.
alert(`Valor à vista: R$ ${vista.toFixed(2)}`); //Exibe o valor à vista.
alert(`Valor da parcela: R$ ${parcela.toFixed(2)}`); //Exibe o valor da parcela.
//Poderiamos fazer assim também:
//alert(`Valor à vista: R$ ${preco - (preco * 0.10)}`); //Exibe o valor à vista.
//alert(`Valor da parcela: R$ ${preco / 3}`); //Exibe o valor da parcela.