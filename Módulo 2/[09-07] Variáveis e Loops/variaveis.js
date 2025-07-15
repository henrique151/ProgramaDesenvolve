const idade = 25;
const nome = "João";
const endereco = "Rua das Flores, 123";
const URL = "https://desenvolve.kflix.com.br";

const listaDeFrutas = ["maçã", "banana", "laranja"];

console.log(nome);

// Usa o const primeiro e se caso for alterar depois usar o let.

console.log(
  `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${endereco}.`
);

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
};

console.log(carro);

console.log(
  `Meu carro é um ${carro.marca} ${carro.modelo} do ano ${carro.ano}.`
);

// typeOF é usado para verificar o tipo de uma variável
console.log(typeof idade); // number
console.log(typeof nome); // string
console.log(typeof listaDeFrutas); // object (arrays são objetos em JavaScript)
console.log(typeof carro); // object

console.log(process.version); // Exibe a versão do Node.js
console.log(process.platform); // Exibe a plataforma do Node.js

console.log(listaDeFrutas[0]); // Acessa o primeiro elemento do array
console.log(listaDeFrutas.length); // Exibe o tamanho do array
console.log(nome[2]);

const a = 10;
const b = 5;
const soma = a + b;
const resta = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const resto = a % b;
const potencia = a ** b;

console.log(
  `Soma: ${soma}, Resta: ${resta}, Multiplicação: ${multiplicacao}, Divisão: ${divisao}, Resto: ${resto}`
);

let carrinho = 0;
carrinho += 10; // Adiciona 10 ao carrinho

console.log(10 !== 10); // false
