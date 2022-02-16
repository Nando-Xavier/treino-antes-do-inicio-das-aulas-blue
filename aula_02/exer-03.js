const prompt = require('prompt-sync')();

const num = +prompt('Digit qualquer numero: ');

const rest = num % 2;

console.log();

if (rest === 0) {
    console.log('O numero digitado é par');
} else {
    console.log('O numero digitado é impar');
}
