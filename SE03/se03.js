const rl = require('readline-sync');

let qtd = 3;

let carros = [];
let consumo = [];
for (let i = 0; i < qtd; i++) {
    carros[i] = rl.question("Nome do carro: ");
    consumo[i] = parseFloat(rl.question("Consumo: "));
}

let maiorConsumo = 0;
let indiceCarroMaiorConsumo = 0;
for (let i = 0; i < qtd; i++) {
    if(consumo[i] > maiorConsumo) {
        maiorConsumo = consumo[i];
        indiceCarroMaiorConsumo = i;
    }
}

console.log(carros);
console.log(consumo);

