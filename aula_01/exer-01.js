const prompt = require('prompt-sync')();
console.log();
console.log('Hellow Wolrd');

const A = prompt('Digite a nota A: ');
const B = prompt('Digite a nota B: ');
const media_ponderada = (A * 4 + B * 6) / 10;
console.log(`A média ponderada do aluno é: ${media_ponderada}`);
