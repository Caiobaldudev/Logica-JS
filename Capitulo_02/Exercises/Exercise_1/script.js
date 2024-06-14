//Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia descrição e preço de um medicamento, informe o valor do produto na promoção.

//Referências
const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

//listener para mudanças
frm.addEventListener('submit', (e) => {
  e.preventDefault()
  const medicamento = frm.inNome.value
  const preco = Number(frm.inPreco.value)
  const total = preco * 2
  const desconto = total - Math.floor(total)
  const valor = total - desconto
  resp1.innerText = `Promoção de: ${medicamento}`
  resp2.innerText = `Leve 2 por R$ ${valor.toFixed(2)}`
  frm.inMedicamento.value = ''
  frm.inPreco.value = ''
  frm.inMedicamento.focus()
})