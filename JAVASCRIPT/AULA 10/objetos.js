// Declaração de objetos

var pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

/*
    Objeto Literais: É a forma mais comum de se criar um objeto, onde você declara diretamente os pares de chave-valor
*/

// Construtor de Objeto: Você pode criar objetos utilizando funções construtoras

function Pessoa(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
}

var pessoa = new Pessoa('João', 30, 'São Paulo');

var pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo',
    apresentar: function() {
        return 'Olá, meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos.';
    }
};

console.log(pessoa.apresentar());

// Object.keys(): Retorna um array contendo os nomes das propriedades enumeráveis de um objeto

var chaves = Object.keys(pessoa);
console.log(chaves); // Saída: ['nome', 'idade', 'cidade']

// Object.values(): Retorna um array contendo os valores das propriedades enumeráveis de um objeto

var valores = Object.values(pessoa);
console.log(valores); // Saída: ['João', 30, 'São Paulo']


// Object.entries(): Retorna um array contendo os pares [chave, valor] de todas as propriedades enumeráveis de um objeto.

var entradas = Object.entries(pessoa);
console.log(entradas); // Saída: [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']]
