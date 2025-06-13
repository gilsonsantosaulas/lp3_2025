const rl = require('readline-sync');

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

let qtd = 4;

let gabarito = [];
for (let i = 0; i < qtd; i++) {
    let resposta = rl.question("Gabarito: ");
    gabarito.push(resposta);
}

let respostasAluno = [];
for (let i = 0; i < qtd; i++) {
    let resposta = rl.question("Respostas: ");
    respostasAluno.push(resposta);
}

let acertos = contarAcertos(gabarito, respostasAluno);
console.log("Acertos: " + acertos);




// Teste de mesa do código

// Simulação do teste de mesa
// Suposições:
// O usuário digita como gabarito: ["A", "B", "C", "D"]
// O usuário digita como respostas: ["A", "X", "C", "D"]

// | Linha | Ação executada                                                           | Variáveis (estado após execução)        |
// | ----- | ------------------------------------------------------------------------ | --------------------------------------- |
// | 1     | Importa `readline-sync`                                                  | -                                       |
// | 3-11  | Declara a função `contarAcertos`                                         | -                                       |
// | 13    | Define `qtd = 4`                                                         | `qtd = 4`                               |
// | 15    | Inicializa vetor `gabarito`                                              | `gabarito = []`                         |
// | 16    | Começa loop para leitura do gabarito (`i = 0`)                           | -                                       |
// | 17    | Usuário digita `"A"`                                                     | `resposta = "A"`                        |
// | 18    | Adiciona `"A"` ao gabarito                                               | `gabarito = ["A"]`                      |
// | 16    | i = 1                                                                    | -                                       |
// | 17    | Usuário digita `"B"`                                                     | `resposta = "B"`                        |
// | 18    | Adiciona `"B"`                                                           | `gabarito = ["A", "B"]`                 |
// | 16    | i = 2                                                                    | -                                       |
// | 17    | Usuário digita `"C"`                                                     | `gabarito = ["A", "B", "C"]`            |
// | 16    | i = 3                                                                    | -                                       |
// | 17    | Usuário digita `"D"`                                                     | `gabarito = ["A", "B", "C", "D"]`       |
// | 21    | Inicializa vetor `respostasAluno`                                        | `respostasAluno = []`                   |
// | 22    | Começa loop de respostas do aluno (`i = 0`)                              | -                                       |
// | 23    | Usuário digita `"A"`                                                     | `resposta = "A"`                        |
// | 24    | Adiciona `"A"`                                                           | `respostasAluno = ["A"]`                |
// | 22    | i = 1                                                                    | -                                       |
// | 23    | Usuário digita `"X"`                                                     | `respostasAluno = ["A", "X"]`           |
// | 22    | i = 2                                                                    | -                                       |
// | 23    | Usuário digita `"C"`                                                     | `respostasAluno = ["A", "X", "C"]`      |
// | 22    | i = 3                                                                    | -                                       |
// | 23    | Usuário digita `"D"`                                                     | `respostasAluno = ["A", "X", "C", "D"]` |
// | 27    | Chama função `contarAcertos(["A", "B", "C", "D"], ["A", "X", "C", "D"])` | -                                       |
// | 4     | Inicializa `acertos = 0`                                                 | `acertos = 0`                           |
// | 5     | i = 0 → compara `"A"` com `"A"` → acerto                                 | `acertos = 1`                           |
// | 5     | i = 1 → compara `"B"` com `"X"` → erro                                   | `acertos = 1`                           |
// | 5     | i = 2 → compara `"C"` com `"C"` → acerto                                 | `acertos = 2`                           |
// | 5     | i = 3 → compara `"D"` com `"D"` → acerto                                 | `acertos = 3`                           |
// | 10    | Retorna 3                                                                | `acertos = 3`                           |
// | 28    | Imprime "Acertos: 3"                                                     | **Saída final: `Acertos: 3`**           |


