// Elaborar um programa que leia um numero e calcule sua raiz quadrada.
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  let resposta = "";
  for (i = 1; i <= 10; i++) {
    resposta = resposta + numero + ' x ' + i + ' = ' + (numero * i) + '\n'
    // resposta = `${resposta}${numero} x ${i} = ${numero * i}\n` ou podemos utilizar desta forma
  }
  resp.innerText = resposta
});
