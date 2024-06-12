//Elaborar um programa que leia o valor de um jantar. calculando também e informando o valor da taxa do garçom(10%) e o valor total a ser pago.
const jantar = Number(prompt('Valor do jantar R$: ')) //lê o valor do jantar.
const taxa = jantar * 0.10 //calcula as variáveis de saída.
const total = jantar + taxa //calcula total.
alert(`Taxa Garçom R$: ${taxa.toFixed(2)}\nTotal R$: ${total.toFixed(2)}`)
// \n pula uma linha
// `` -> template strings
//.toFixed(2) -> arredonda para duas casas decimais.

//Poderiamos fazer assim também:
// const total = jantar + (jantar * 0.10) //ou então
// const total = jantar * 1.10