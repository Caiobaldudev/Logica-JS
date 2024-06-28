// Elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir a exibição do nome da fruta, de acordo com o número informado. Utilize o '*' para separar os nomes.
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fruta = frm.inFruta.value
  const num = Number(frm.inNumero.value);
  let resultado = ''
  for (let i = 1; i <= num; i++) {
    resultado += fruta
    if (i < num) {
      resultado += " * ";
    }
  }
  resp.innerText = resultado;
});
