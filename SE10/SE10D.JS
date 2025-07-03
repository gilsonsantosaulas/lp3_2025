function mostrarMaioresDeIdade(nomes, idades) {
  for (let i = 0; i < nomes.length; i++) {
    if (idades[i] >= 18) {
      console.log(nomes[i]);
    }
  }
}

mostrarMaioresDeIdade(["Ana", "Lucas", "Pedro"], [17, 20, 16]);
