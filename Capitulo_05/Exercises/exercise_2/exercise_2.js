// Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. O número inicial de chinchilas deve ser maior ou igual a 2(um casal).

const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeroInicial = Number(frm.inNumero.value);
  const anos = Number(frm.inAnos.value);

  if (numeroInicial < 2) {
    resp.innerText = "O número inicial de chinchilas deve ser pelo menos 2.";
    return;
  }

  let resultado = "";
  let chinchilas = numeroInicial;

  for (let i = 1; i <= anos; i++) {
    if (i > 1) {
      chinchilas *= 3;
    }
    resultado += `${i}º Ano: ${chinchilas} Chinchilas\n`;
  }

  resp.innerText = resultado;
});
