// Elaborar um programa que leia a hora no Brasil e informa a hora na França.
// O fuso horário da França em relação ao Brasil é de +5H
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value)
  const raiz = Math.sqrt(numero)
  if (Number.isInteger(raiz)) {
    resp.innerText = `Raiz: ${raiz}`
  } else {
    resp.innerText = `Não há raiz exata para ${numero}`
  }
});

