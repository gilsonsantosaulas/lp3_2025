function filtrarIntervalo(vetor, minimo, maximo) {
  let resultado = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= minimo && vetor[i] <= maximo) {
      resultado.push(vetor[i]);
    }
  }
  return resultado;
}

console.log(filtrarIntervalo([5, 8, 12, 20, 25], 10, 20));
