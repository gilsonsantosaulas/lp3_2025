const rl = require('readline-sync');

let qtd = 5;

let produtos = [];
let precos = [];
let quantidades = [];
let totais = [];
let totalPedido = 0;

for (let i = 0; i < qtd; i++) {
    produtos[i] = rl.question("Digite o nome do produto " + (i + 1) + ": ");
    precos[i] = parseFloat(rl.question("Digite o preço do produto " + (i + 1) + ": "));
    quantidades[i] = parseInt(rl.question("Digite a quantidade vendida do produto " + (i + 1) + ": "));
    totais[i] = precos[i] * quantidades[i];
    totalPedido = totalPedido + totais[i];
}

console.log("\nResumo das Vendas:");
for (let i = 0; i < qtd; i++) {
    console.log(
        "Produto " + (i + 1) + ": " +
        "Nome: " + produtos[i] + ", " +
        "Preço Unitário: R$ " + precos[i].toFixed(2) +", " +
        "Quantidade Vendida: " + quantidades[i] + ", " +
        "Total de Produto: R$ " + totais[i].toFixed(2)
      );
      
}
console.log("\nTotal do Pedido: R$ " + totalPedido.toFixed(2));
let comissaoVendedor = totalPedido * 0.1;
console.log("Comissão do vendedor: R$ " + comissaoVendedor.toFixed(2));