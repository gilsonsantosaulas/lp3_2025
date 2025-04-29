const rl = require('readline-sync');

let estados = ['Mato Grosso do Sul','Mato Grosso', 'Goiás'];
let siglas = ['MS','MT','GO'];

let siglaBuscada = rl.question("Digite a sigla que deseja buscar: ");
let indice = siglas.indexOf(siglaBuscada);

if (indice !== -1) {
    console.log("O estado correspondente à sigla " + siglaBuscada + " é: " + estados[indice]);
} else {
    console.log("Sigla não encontrada.");
}
