//editor online: https://jsfiddle.net/

const rl = require('readline-sync');        // no editor online comente esta linha

let qtd = 4;

let gabarito = [];
for (let i = 0; i < qtd; i++) {
    //prompt("Acertos: "+acertos);          //no editor online descomente esta linha
    resposta = rl.question("Gabarito: ");   // no editor online comente esta linha
    gabarito[i] = resposta;
}

let respostasAluno = [];
for (let i = 0; i < qtd; i++) {
    //resposta = prompt("Acertos: "+acertos);   //no editor online descomente esta linha
    resposta = rl.question("Respostas: ");      // no editor online comente esta linha
    respostasAluno[i] = resposta;
}


let acertos = 0;
for (let i = 0; i < qtd; i++) {
    if (respostasAluno[i] == gabarito[i]) {
        acertos++;
    }
}
//alert("Acertos: "+acertos);       // no editor online comente esta linha
console.log("Acertos: "+acertos);   // no editor online comente esta linha

