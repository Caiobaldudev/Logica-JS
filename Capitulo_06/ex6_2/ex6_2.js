const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];
const sort = Math.floor(Math.random() * 100) + 1;
const CHANCES = 6;

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  if (numero == sort) {
    respDica.innerText = `Parabéns!! Número sorteado: ${sort}`;
    frm.btSubmit.disabled = true;
    frm.btNovo.className = "exibe";
  } else {
    if (erros.includes(numero)) {
      alert(`Você já apostou o número ${numero}. Tente outro...`);
    } else {
      erros.push(numero);
      const numErros = erros.length;
      const numChances = CHANCES - numErros;
      respErros.innerText = `${numErros} (${erros.join(", ")})`;
      respChances.innerText = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram...");
        frm.btSubmit.disabled = true;
        frm.btNovo.className = 'exibe'
        respDica.innerText = `Game Over!! Número Sorteado: ${sort}`
      } else {
        const dica = numero < sort ? 'maior' : 'menor'
        respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
      }
    }
  }
  frm.inNumero.value = ''
  frm.inNumero.focus()
});

frm.btNovo.addEventListener('click', () => {
  location.reload()
})
