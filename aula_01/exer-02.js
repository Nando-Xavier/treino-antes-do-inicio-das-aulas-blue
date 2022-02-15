const prompt = require('prompt-sync')();

const nome_peca_01 = prompt('Digite o nome da peça 01: ');
const qtd_peca_01 = +prompt('Digite a quantidade de peça 01: ');
const preco_peca_01 = +prompt('Digite o preço da peça 01: ');
console.log();
const nome_peca_02 = prompt('Digite o nome da peça 02: ');
const qtd_peca_02 = +prompt('Digite a quantidade de peça 02: ');
const preco_peca_02 = +prompt('Digite o preço da peça 02: ');
console.log();
const total01 = qtd_peca_01 * preco_peca_01;
const total02 = qtd_peca_02 * preco_peca_02;
console.log();
console.log(`O valor a ser pago será de ${total01 + total02} reais.`);
