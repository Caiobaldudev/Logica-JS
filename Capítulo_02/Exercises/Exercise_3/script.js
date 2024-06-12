//Um supermecado está com uma promoção. Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três uinidades do produto. Elaborar ujm programa que leia descrição e preço de um produto. Após apresente as mensagens indicando a proimoção.

//Referências
const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

//listener para mudanças  

frm.addEventListener('submit', (e) => {
  e.preventDefault()
  const produto = frm.inProduto.value
  const preco = Number(frm.inPreco.value)
   const valorDesconto = preco / 2;
   const valorTotal = (2 * preco) + valorDesconto;
   resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${valorTotal.toFixed(2)}`;
   resp2.innerText = `O 3º produto custa apenas R$ ${valorDesconto.toFixed(2)}`;
  frm.inProduto.value = ''
  frm.inPreco.value = ''
  frm.inComputador.focus()
})
