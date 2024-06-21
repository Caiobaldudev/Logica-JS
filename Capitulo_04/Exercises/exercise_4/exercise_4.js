const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ladoA = Number(frm.inValorA.value);
  const ladoB = Number(frm.inValorB.value);
  const ladoC = Number(frm.inValorC.value);

  if (validarTriangulo(ladoA, ladoB, ladoC)) {
    const tipoTriangulo = determinarTipoTriangulo(ladoA, ladoB, ladoC);
    resp1.textContent = "Os lados formam um triângulo.";
    resp2.textContent = `Tipo de triângulo: ${tipoTriangulo}`;
  } else {
    resp1.textContent = "Os lados NÃO formam um triângulo.";
    resp2.textContent = "";
  }

  frm.inValorA.value = "";
  frm.inValorB.value = "";
  frm.inValorC.value = "";
});

function validarTriangulo(a, b, c) {
  // Para formar um triângulo, a soma de dois lados quaisquer deve ser maior que o terceiro lado
  return (a + b > c) && (a + c > b) && (b + c > a);
}

function determinarTipoTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero"; // Todos os lados iguais
  } else if (a === b || a === c || b === c) {
    return "Isósceles"; // Dois lados iguais
  } else {
    return "Escaleno"; // Todos os lados diferentes
  }
};


