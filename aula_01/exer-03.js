const prompt = require('prompt-sync')();
console.log('Hellow Wolrd');
const anos = +prompt('Digite a sua idade em anos ');
const meses = +prompt('Digite quantos meses ');
const dias = +prompt('Digite quantos dias ');
const qtd_diasAnos = anos * 365;
const qtd_diasMeses = meses * 30;

console.log(
    `A quantidade de dias é: ${qtd_diasAnos + qtd_diasMeses + dias} dias.`,
);
