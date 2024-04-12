// Definindo uma classe

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Instanciando  um objeto

const pessoa1 = new Pessoa('Luis', 26)

// console.log(pessoa1)

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
    }
}

const est = new Estudante('luis', 26, 'ads')
est.apresentar()

