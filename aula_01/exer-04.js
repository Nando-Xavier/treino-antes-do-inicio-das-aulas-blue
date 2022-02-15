const prompt = require('prompt-sync')();
console.log();

const Qdias = +prompt('Digite a quantidde de dias ');
const Qanos = parseInt(Qdias / 365);
const resto1 = Qdias % 365;
const Qmeses = parseInt(resto1 / 30);
const restoDias = resto1 % 30;

console.log(
    `A quantidade de dias é: ${Qanos}  anos, ${Qmeses} meses e ${restoDias} dias.`,
);
