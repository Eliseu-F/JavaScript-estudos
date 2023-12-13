const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento = 2023 - 30;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} de altura e seu imc é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);