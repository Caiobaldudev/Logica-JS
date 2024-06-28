const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  let resposta = `Entre ${numero} e 1: `;
  for (let i = numero; i > 1; i--) {
    resposta = resposta + i + ", ";
  }
  resposta = resposta + "1.";
  resp.innerText = resposta;
});

// No próximo exemplo,veremos que daria para fazer com o do..while, outro laço de repetição:

// let i = numero;
// while (i > 0) {
//   resposta = resposta + i + ", ";
//   i--;
// }
