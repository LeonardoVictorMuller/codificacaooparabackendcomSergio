const prompt = require('prompt-sync')();

const numero1 = parseFloat(prompt('Digite um número: '));
const numero2 = parseFloat(prompt('Digite outro número: '));

console.log(`A soma dos dois números é ${numero1 + numero2}`);
