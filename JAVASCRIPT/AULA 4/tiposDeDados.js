// numbers

var idade = 25;
var altura = 1.75;

//string

var nome = "Maria";
var mensagem = 'Olá, mundo!';

// booleans

var aprovado = true;
var reprovado = false;

// array

var pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

var x; // Variável declarada, mas não inicializada
console.log(x); // Saída: undefined

// Functions

function soma(a, b) {
    return a + b;
}

//Symbols (Symbol) - a partir do ECMAScript 6
var sym1 = Symbol('sym');
var sym2 = Symbol('sym');
console.log(sym1 === sym2); // Saída: false
