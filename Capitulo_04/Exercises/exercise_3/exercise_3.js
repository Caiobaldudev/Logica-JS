// Elaborar um programa que leia um numero. Informe se ele é par ou ímpar.
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const valorInserido = parseFloat(frm.inValor.value);
  const tabelaValoresTempos = [
    { valor: 1.0, tempo: 30 },
    { valor: 1.75, tempo: 60 },
    { valor: 3.0, tempo: 120 },
  ];
  let tempoPermanencia = 0;
  let troco = 0;
  for (let i = 0; i < tabelaValoresTempos.length; i++) {
    if (valorInserido >= tabelaValoresTempos[i].valor) {
      tempoPermanencia = tabelaValoresTempos[i].tempo;
      troco = valorInserido - tabelaValoresTempos[i].valor;
    }
  }

  if (tempoPermanencia === 0) {
    resp1.textContent = "Valor insuficiente.";
    resp2.textContent = "";
  } else {
    resp1.textContent = `Tempo de permanência: ${tempoPermanencia} minutos.`;
    if (troco > 0) {
      resp2.textContent = `Troco: R$ ${troco.toFixed(2)}.`;
    } else {
      resp2.textContent = "";
    }
  }

  inValor.value = "";
});
