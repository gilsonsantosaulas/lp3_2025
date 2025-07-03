function somarVetores(vetor1, vetor2) {
  let resultado = [];
  for (let i = 0; i < vetor1.length; i++) {
    resultado.push(vetor1[i] + vetor2[i]);
  }
  return resultado;
}

console.log(somarVetores([1, 2, 3], [4, 5, 6]));
