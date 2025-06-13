const rl = require('readline-sync');

function indiceMaiorConsumo(consumo) {
    let maior = consumo[0];
    let indice = 0;
    for (let i = 1; i < consumo.length; i++) {
        if (consumo[i] > maior) {
            maior = consumo[i];
            indice = i;
        }
    }
    return indice;
}

let qtd = 3;

let carros = [];
let consumo = [];
for (let i = 0; i < qtd; i++) {
    carros[i] = rl.question("Nome do carro: ");
    consumo[i] = parseFloat(rl.question("Consumo: "));
}

let indiceCarroMaiorConsumo = indiceMaiorConsumo(consumo);

console.log(carros);
console.log(consumo);
console.log("Carro com maior consumo: " + carros[indiceCarroMaiorConsumo] + " (" + consumo[indiceCarroMaiorConsumo] + " km/l)");


// Simulação de entrada

// | Iteração | Entrada do carro | Entrada do consumo |
// | -------- | ---------------- | ------------------ |
// | i = 0    | uno              | 12                 |
// | i = 1    | gol              | 10                 |
// | i = 2    | civic            | 14                 |



// Teste de Mesa

// | Linha | Ação executada                                       | Estado das variáveis               |
// | ----- | ---------------------------------------------------- | ---------------------------------- |
// | 1     | Importa readline-sync                                | -                                  |
// | 3–13  | Declara a função `indiceMaiorConsumo`                | -                                  |
// | 15    | `qtd = 3`                                            | `qtd = 3`                          |
// | 17–18 | Inicializa arrays                                    | `carros = []`, `consumo = []`      |
// | 19    | Loop i = 0                                           | -                                  |
// | 20    | Entrada: `"uno"`                                     | `carros = ["uno"]`                 |
// | 21    | Entrada: `"12"` → `parseFloat(12)`                   | `consumo = [12]`                   |
// | 19    | Loop i = 1                                           | -                                  |
// | 20    | Entrada: `"gol"`                                     | `carros = ["uno", "gol"]`          |
// | 21    | Entrada: `"10"` → `parseFloat(10)`                   | `consumo = [12, 10]`               |
// | 19    | Loop i = 2                                           | -                                  |
// | 20    | Entrada: `"civic"`                                   | `carros = ["uno", "gol", "civic"]` |
// | 21    | Entrada: `"14"` → `parseFloat(14)`                   | `consumo = [12, 10, 14]`           |
// | 24    | Chamada da função `indiceMaiorConsumo([12, 10, 14])` | -                                  |
// | 4     | `maior = 12`, `indice = 0`                           | -                                  |
// | 6     | i = 1: `consumo[1] = 10` < 12 → não entra no if      |                                    |
// | 6     | i = 2: `consumo[2] = 14` > 12 → entra no if          |                                    |
// | 8–9   | `maior = 14`, `indice = 2`                           |                                    |
// | 12    | `return 2` → `indiceCarroMaiorConsumo = 2`           |                                    |
// | 26    | Exibe: `["uno", "gol", "civic"]`                     |                                    |
// | 27    | Exibe: `[12, 10, 14]`                                |                                    |
// | 28    | Exibe: `"Carro com maior consumo: civic (14 km/l)"`  |                                    |


// Saída esperada

// [ 'uno', 'gol', 'civic' ]
// [ 12, 10, 14 ]
// Carro com maior consumo: civic (14 km/l)
