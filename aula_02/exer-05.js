const prompt = require('prompt-sync')();
const A = 7;
const B = 4;
const C = 6;
if (A >= B + C) {
    console.log('NAO FORMA TRIANGULO');
} else if (A ** 2 === B ** 2 + C ** 2) {
    console.log('TRIANGULO RETANGULO');
} else if (A ** 2 > B ** 2 + C ** 2) {
    console.log('TRIANGULO OBTUSANGULO');
} else if (A === B && B === C) {
    console.log('TRIANGULO EQUILATERO');
} else if (A === B || A === C || B === C) {
    console.log('TRIANGULO ISOSCELES');
} else if (A ** 2 < B ** 2 + C ** 2) {
    console.log('TRIANGULO ACUTANGULO');
}

//else if (A === B || A === C || B === C) {
//console.log('TRIANGULO ISOSCELES');

// else if (A ** 2 === B ** 2 + C ** 2) {
//     console.log('TRIANGULO RETANGULO');
// }

// else if (A ** 2 < B ** 2 + C ** 2) {
//     console.log('TRIANGULO ACUTANGULO');
// } else if (A === B === C) {
//     console.log('TRIANGULO EQUILATERO');
// }
