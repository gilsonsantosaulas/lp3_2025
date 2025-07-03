function operarVetor(vetor, operacao) {
  if (operacao === "soma") {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
    return soma;
  } else if (operacao === "multiplicacao") {
    let produto = 1;
    for (let i = 0; i < vetor.length; i++) {
      produto *= vetor[i];
    }
    return produto;
  } else {
    return "Operação inválida";
  }
}

console.log(operarVetor([2, 3, 4], "soma"));
console.log(operarVetor([2, 3, 4], "multiplicacao"));
