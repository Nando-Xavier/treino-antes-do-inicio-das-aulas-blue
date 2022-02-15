const prompt = require('prompt-sync')();
const nota1 = +prompt('Digite a nota 01: ');
const nota2 = +prompt('Digite a nota 02: ');
const nota3 = +prompt('Digite a nota 03: ');
const nota4 = +prompt('Digite a nota 04: ');
const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log();
if (media >= 7) {
    console.log('Aluno aprovado');
} else if (media>=5 && media <7) {
    console.log('Aluno em recuperação');
} else {
    console.log('Aluno reprovado');
}
