class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Criando uma instância da classe Pessoa
let pessoa1 = new Pessoa("Ana", 30);
console.log(pessoa1.saudacao()); // Output: Olá, meu nome é Ana e tenho 30 anos.


class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    som(): string {
        return "Som genérico";
    }
}

class Cachorro extends Animal {
    som(): string {
        return "Au Au!";
    }
}

// Criando uma instância da classe Cachorro
let cachorro = new Cachorro("Rex");
console.log(cachorro.som()); // Output: Au Au!


class Carro {
    private modelo: string;
    public ano: number;
    protected preco: number;

    constructor(modelo: string, ano: number, preco: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }

    descricao(): string {
        return `Modelo: ${this.modelo}, Ano: ${this.ano}, Preço: ${this.preco}`;
    }
}

// Tentando acessar membros privados, públicos e protegidos da classe Carro
let carro = new Carro("Toyota", 2022, 25000);
console.log(carro.modelo); // Erro: Propriedade 'modelo' é privada e só pode ser acessada dentro da classe 'Carro'
console.log(carro.ano); // Output: 2022
console.log(carro.preco); // Erro: Propriedade 'preco' é protegida e só pode ser acessada dentro da classe 'Carro' e suas subclasses


class Utilitarios {
    static somar(a: number, b: number): number {
        return a + b;
    }
}

// Chamando o método estático somar diretamente na classe
console.log(Utilitarios.somar(5, 3)); // Output: 8
