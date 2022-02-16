const prompt = require('prompt-sync')();
const valorA = +prompt('Digite o valor de A: ');
const valorB = +prompt('Digite o valor de B: ');
const resto = valorA % valorB;
console.log();
if (resto == 0) {
    console.log('A é multiplo de B');
} else {
    console.log('A não é multiplo de B');
}
