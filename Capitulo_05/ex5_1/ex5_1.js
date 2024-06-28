// Elaborar um programa que leia um numero e calcule sua raiz quadrada.
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  let resposta = "";
  for (i = 1; i <= 10; i++) {
    // resposta = resposta + numero + ' x ' + i + ' = ' + (numero * i) + '\n' // podemos usar assim
    resposta = `${resposta}${numero} x ${i} = ${numero * i}\n` //Forma usando template strings, mais clean
  }
  resp.innerText = resposta
});
