const rl = require('readline-sync');

let qtd = 5;

let usuarios = [];
let curtidas = [];
let compartilhamentos = [];
let engajamentos = [];
let engajamentoTotal = 0;

for (let i = 0; i < qtd; i++) {
    console.log("Postagem "+ (i + 1));
    usuarios[i] = rl.question("Digite o nome do usuário: ");
    curtidas[i] = parseInt(rl.question("Digite o número de curtidas: "));
    compartilhamentos[i] = parseInt(rl.question("Digite o número de compartilhamentos: "));
    engajamentos[i] = curtidas[i] + 2 * compartilhamentos[i];
    engajamentoTotal = engajamentoTotal + engajamentos[i];
}

console.log("\nResumo das Postagens:");
for (let i = 0; i < qtd; i++) {
    console.log(
        "Postagem " + (i + 1) + ": Usuário: " + usuarios[i] + ", " +
        "Curtidas: " + curtidas[i]+ ", " +
        "Compartilhamentos: " + compartilhamentos[i] + ", " +
        "Engajamento: " + engajamentos[i]
    );
}

let mediaEngajamento = engajamentoTotal / qtd;

let maior = engajamentos[0];
let indiceMaior = 0;
for (let i = 1; i < qtd; i++) {
    if (engajamentos[i] > maior) {
        maior = engajamentos[i];
        indiceMaior = i;
    }
}

console.log("\nEngajamento total: " + engajamentoTotal);
console.log("Média de engajamento: " + mediaEngajamento.toFixed(1));
console.log("Postagem com maior engajamento: " + usuarios[indiceMaior] + " (Engajamento: " + maior +")");
