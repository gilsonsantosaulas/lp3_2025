function somarElementosVetor(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma = soma+vetor[i];
    }
    return soma; // retorna 10
}
let vetorNumeros = [1, 2, 3, 4];
let resultado = somarElementosVetor(vetorNumeros);
console.log(resultado); // mostra 10

let vetorNumeros2 = [10, 2, 300, 40];
console.log(somarElementosVetor(vetorNumeros2))

let vetorNumeros3 = [10, 100, 1000];
console.log(somarElementosVetor(vetorNumeros3));
  