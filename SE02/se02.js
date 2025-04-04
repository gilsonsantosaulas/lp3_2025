const rl = require('readline-sync');

let qtd = 3;

let nomes_pacientes = [];
let planos_saude = [];
for (let i = 0; i < qtd; i++) {
    nomes_pacientes[i] = rl.question("Nome do paciente: ");
    planos_saude[i] = rl.question("Plano de Saúde: ");
}

let paciente_particular = 0;
let paciente_plano = 0;
for (let i = 0; i < qtd; i++) {
    if(planos_saude[i] == 'particular') {
        paciente_particular++;
    } else {
        paciente_plano++;
    }
}
console.log("Quantidade particular: "+paciente_particular);
console.log("Quantidade plano de saúde: "+paciente_plano);

