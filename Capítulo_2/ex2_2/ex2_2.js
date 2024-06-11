//Elaborar um programa para um cinema, que leia o título e a duração de um filme em minutos. Exiba o titulo do filme e converta a duração para horas e minutos.
//Referências
const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

//listener para mudanças
frm.addEventListener('submit', (e) => {
  const titulo = frm.inTitulo.value; //obtém conteúdo dos campos
  const duracao = Number(frm.inDuracao.value); //obtém conteúdo dos campos
  const horas = Math.floor(duracao / 60); //Arredonda para baixo resultado
  const minutos = duracao % 60; //Obtém o resto da divisão
  resp1.innerText = `Título: ${titulo}`; //exibe a resposta
  resp2.innerText = `Duração: ${horas} horas e ${minutos} minutos`; //exibe a resposta
  e.preventDefault(); //evita o envio
  frm.inTitulo.value = ''; //limpa campo
  frm.inDuracao.value = ''; //limpa campo
});