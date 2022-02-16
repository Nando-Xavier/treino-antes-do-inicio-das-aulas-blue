console.log('Helow, Wolrd');
const prompt = require('prompt-sync')();
const numero1 = 20;
const numero2 = 20;
console.log();
if (numero1 > numero2) {
    console.log(`${numero1} é maior que ${numero2}.`);
} else if (numero1 < numero2) {
    console.log(`${numero1} é menor que ${numero2}.`);
} else {
    console.log(`${numero1} é igual a ${numero2}.`);
}
