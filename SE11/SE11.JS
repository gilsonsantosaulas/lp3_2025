const leia = require('readline-sync');

inicioJogo();

function inicioJogo() {
  console.clear();
  console.log('\n--- Pedra (0), Papel (1), Tesoura (2) ---');
  resposta = leia.question('Escolha um número (0, 1 ou 2): ');
  jogar(resposta)
}

function jogar(resposta) {
  const escolhaUsuario = parseInt(resposta);
  const escolhaComputador = Math.floor(Math.random() * 3);

  if (escolhaUsuario < 0 || escolhaUsuario > 2 || isNaN(escolhaUsuario)) {
    console.log('Escolha inválida.');
    return inicioJogo();
  }

  const nomes = ['Pedra', 'Papel', 'Tesoura'];
  console.log('Você: ' + nomes[escolhaUsuario]);
  console.log('escolhaComputador: ' + nomes[escolhaComputador]);

  let mensagemVencedor = definirVencedor(escolhaUsuario, escolhaComputador);
  console.log("*****"+mensagemVencedor+"*****");

  let respostaJogar = leia.question('\nJogar de novo? (s/n): ')
  if (respostaJogar === 's') {
    inicioJogo();
  } else {
    console.log('Tchau!');
  }
}

function definirVencedor(escolhaUsuario, escolhaComputador) {
  if (escolhaUsuario === escolhaComputador) {
    return "Empate!";
  }
  if (
    (escolhaUsuario === 0 && escolhaComputador === 2) ||
    (escolhaUsuario === 1 && escolhaComputador === 0) ||
    (escolhaUsuario === 2 && escolhaComputador === 1)
  ) {
    return "Você venceu!";
  } else {
    return "Computador venceu!";
  }
}