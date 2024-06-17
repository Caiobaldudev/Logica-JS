// Elaborar um programa que leia um numero. Informe se ele é par ou ímpar.
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value)
  if (numero % 2 == 0) {
    resp.innerText = `${numero} É Par`
  } else {
    resp.innerText = `${numero} É Ímpar`
  }
});

