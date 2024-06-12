//Elaborar um programa para uma lan house de um aeroporto, o programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.

//Referências

const frm = document.querySelector('form');
const resp = document.querySelector('#outResp');

//listener para mudanças  

frm.addEventListener('submit', (e) => {
  e.preventDefault()
  const computador = Number(frm.inComputador.value)
  const minutos = Number(frm.inMinutos.value)
  const periodos = Math.ceil(minutos / 15)
  const valorTotal = computador * periodos
  resp.innerText = `Valor a ser pago: R$ ${valorTotal.toFixed(2)}`
  frm.inComputador.value = ''
  frm.inMinutos.value = ''
  frm.inComputador.focus()
})
