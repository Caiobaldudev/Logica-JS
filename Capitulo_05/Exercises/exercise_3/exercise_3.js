// Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número). O programa deve exibir os divisores do número e a soma deles.
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", function(e) {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  let divisores = [];
  let somaDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
      somaDivisores += i;
    }
  }

  let divString = `Divisores do ${numero}: `;
  for (let j = 0; j < divisores.length; j++) {
    if (j !== 0) {
      divString += ", ";
    }
    divString += divisores[j];
  }
  divString += ` (Soma: ${somaDivisores})`;

  resp1.textContent = divString;

  if (somaDivisores === numero) {
    resp2.textContent = `${numero} É um número Perfeito`;
  } else {
    resp2.textContent = `${numero} Não é um número Perfeito`;
  }
});
