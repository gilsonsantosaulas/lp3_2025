const leia = require('readline-sync');

function solicitarEntrada(mensagem) {
  let resposta = leia.question(mensagem + ' ');
  return resposta;
}

let nome = solicitarEntrada("Digite seu nome:");
console.log("Você digitou:", nome);
