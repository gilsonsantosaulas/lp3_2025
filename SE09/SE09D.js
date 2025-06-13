const rl = require('readline-sync');

function anoBissexto(ano) {
    if ((ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let ano = parseInt(rl.question("Digite o ano: "));

if (anoBissexto(ano)==true) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}


// Teste de mesa (com linhas e entrada simulada)

// | Linha | Ação Executada                          | Estado das Variáveis / Saída |                 |   |
// | ----- | --------------------------------------- | ---------------------------- | --------------- | - |
// | 1     | Importa readline-sync                   | —                            |                 |   |
// | 3–8   | Declara função `anoBissexto(ano)`       | —                            |                 |   |
// | 10    | Entrada do usuário: `2024`              | `ano = 2024`                 |                 |   |
// | 12    | Chama `anoBissexto(2024)`               | —                            |                 |   |
// | 4     | Avalia `2024 % 4 === 0` → `true`        | —                            |                 |   |
// | 4     | Avalia `2024 % 100 !== 0` → `true`      | —                            |                 |   |
// | 4     | Avalia \`(true                          |                              | 
// | 4     | Condição geral: `true && true` → `true` | —                            |                 |   |
// | 5     | Retorna `true`                          | —                            |                 |   |
// | 13    | `if(true)` entra no bloco               | —                            |                 |   |
// | 14    | Imprime `"2024 é um ano bissexto."`     | —                            |                 |   |

