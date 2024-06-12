//Elaborar um programa para um restaurante que leia o preço por kg e o consumo(em gramas) de um cliente. Exiba o valor a ser pago.
//Referências
const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  const quilo = Number(frm.inQuilo.value)
  const consumo = Number(frm.inConsumo.value)
  const valor = (quilo / 1000) * consumo
  resp.innerText = `Valor a ser pago: R$ ${valor.toFixed(2)}`
  e.preventDefault()
  frm.inQuilo.value = ''
  frm.inConsumo.value = ''
  frm.inQuilo.focus()
})