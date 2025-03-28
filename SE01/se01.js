const rl = require('readline-sync');

let qtd = 4;

let gabarito = [];
for (let i = 0; i < qtd; i++) {
    resposta = rl.question("Gabarito: ");
    gabarito[i] = resposta;
}

let respostasAluno = [];
for (let i = 0; i < qtd; i++) {
    resposta = rl.question("Respostas: ");
    respostasAluno[i] = resposta;
}


let acertos = 0;
for (let i = 0; i < qtd; i++) {
    if (respostasAluno[i] === gabarito[i]) {
        acertos++;
    }
}

console.log("Acertos: "+acertos);

