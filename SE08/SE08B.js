const rl = require('readline-sync');

function contarParticulares(planos) {
    let contador = 0;
    for (let i = 0; i < planos.length; i++) {
        if (planos[i] === 'particular') {
            contador++;
        }
    }
    return contador;
}

let qtd = 3;

let nomes_pacientes = [];
let planos_saude = [];

for (let i = 0; i < qtd; i++) {
    nomes_pacientes[i] = rl.question("Nome do paciente: ");
    planos_saude[i] = rl.question("Plano de Saúde: ");
}

let paciente_particular = contarParticulares(planos_saude);
let paciente_plano = qtd - paciente_particular;

console.log("Quantidade particular: " + paciente_particular);
console.log("Quantidade plano de saúde: " + paciente_plano);

for (let i = 0; i < qtd; i++) {
    if (planos_saude[i] !== "particular") {
        console.log(nomes_pacientes[i] + " - " + planos_saude[i]);
    }
}



// | Nome do paciente | Plano de Saúde |
// | ---------------- | -------------- |
// | ana              | particular     |
// | bruno            | unimed         |
// | carla            | particular     |




// | Linha | Ação executada                                                       | Estado das variáveis                                    |
// | ----- | -------------------------------------------------------------------- | ------------------------------------------------------- |
// | 1     | Importa `readline-sync`                                              | -                                                       |
// | 3–11  | Define a função `contarParticulares`                                 | -                                                       |
// | 13    | `qtd = 3`                                                            | `qtd = 3`                                               |
// | 15    | `nomes_pacientes = []`                                               | -                                                       |
// | 16    | `planos_saude = []`                                                  | -                                                       |
// | 18    | Início do loop (i = 0)                                               | -                                                       |
// | 19    | Usuário digita `"ana"`                                               | `nomes_pacientes = ["ana"]`                             |
// | 20    | Usuário digita `"particular"`                                        | `planos_saude = ["particular"]`                         |
// | 18    | i = 1                                                                | -                                                       |
// | 19    | Usuário digita `"bruno"`                                             | `nomes_pacientes = ["ana", "bruno"]`                    |
// | 20    | Usuário digita `"unimed"`                                            | `planos_saude = ["particular", "unimed"]`               |
// | 18    | i = 2                                                                | -                                                       |
// | 19    | Usuário digita `"carla"`                                             | `nomes_pacientes = ["ana", "bruno", "carla"]`           |
// | 20    | Usuário digita `"particular"`                                        | `planos_saude = ["particular", "unimed", "particular"]` |
// | 23    | Chama `contarParticulares(planos_saude)`                             | -                                                       |
// | 4     | `contador = 0`                                                       | -                                                       |
// | 5     | i = 0 → planos\[i] = "particular" → contador = 1                     |                                                         |
// | 5     | i = 1 → planos\[i] = "unimed" ≠ "particular" → contador = 1          |                                                         |
// | 5     | i = 2 → planos\[i] = "particular" → contador = 2                     |                                                         |
// | 10    | Retorna `2` → `paciente_particular = 2`                              |                                                         |
// | 24    | `paciente_plano = qtd - paciente_particular = 3 - 2 = 1`             |                                                         |
// | 26    | Exibe: `"Quantidade particular: 2"`                                  |                                                         |
// | 27    | Exibe: `"Quantidade plano de saúde: 1"`                              |                                                         |
// | 29    | Início do loop de impressão                                          |                                                         |
// | 30    | i = 0 → plano = "particular" → não imprime                           |                                                         |
// | 30    | i = 1 → plano = "unimed" ≠ "particular" → imprime `"bruno - unimed"` |                                                         |
// | 30    | i = 2 → plano = "particular" → não imprime                           |                                                         |

// Saída final esperada
// Quantidade particular: 2
// Quantidade plano de saúde: 1
// bruno - unimed
