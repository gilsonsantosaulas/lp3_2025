const rl = require('readline-sync');

let qtd = 3;

let nomes = [];
let telefones = [];
for (let i = 0; i < qtd; i++) {
    nomes[i] = rl.question("Digite o nome da pessoa " + (i + 1) + ": ");
    telefones[i] = rl.question("Digite o telefone da pessoa " + (i + 1) + ": ");
}

let nomeBuscado = rl.question("Digite o nome que deseja buscar: ");
let indice = nomes.indexOf(nomeBuscado);

if (indice !== -1) {
    console.log("O telefone de " + nomeBuscado + " é: " + telefones[indice]);
} else {
    console.log("Nome não encontrado.");
}
