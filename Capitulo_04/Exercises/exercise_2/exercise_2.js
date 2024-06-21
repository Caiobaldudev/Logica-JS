const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  //leitura da velocidades
  const permitido = Number(frm.inPermitido.value)
  const condutor = Number(frm.inCondutor.value)
  //Condições
  let velocidadeAcimaPermitida = (condutor - permitido)
  let porcentagem = (permitido * 0.2)
  
  if((frm.inCondutor.value == '' || frm.inPermitido.value == '') || (isNaN(permitido) || isNaN(condutor))) {
    alert('Digite uma velocidade válida!')
    frm.inPermitido.value = ''
    frm.inCondutor.value = ''
    condutor.focus();
    return
  }
  if (condutor <= permitido) {
    resp.innerText = `Situação: Sem Multa!`
  } else if(velocidadeAcimaPermitida >= porcentagem) {
    resp.innerText = `Situação: Multa Grave!`
  } else {
    resp.innerText = `Situação: Multa Leve!`
  }
});

