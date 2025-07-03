function contarOcorrencias(vetor, numero) {
  let contador = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      contador++;
    }
  }
  return contador;
}

console.log(contarOcorrencias([2, 3, 4, 2, 2, 5], 2));
