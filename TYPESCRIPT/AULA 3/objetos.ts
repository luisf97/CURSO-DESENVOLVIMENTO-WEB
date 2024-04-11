// Definindo um tipo para um objeto Pessoa
type Pessoa = {
    nome: string;
    idade: number;
};

// Função que recebe um objeto Pessoa e retorna uma saudação
function saudarPessoa(pessoa: Pessoa): string {
    return `Olá, ${pessoa.nome}! Você tem ${pessoa.idade} anos.`;
}

// Criando um objeto Pessoa
let pessoa: Pessoa = { nome: "Maria", idade: 30 };

// Chamando a função com o objeto Pessoa
let saudacao: string = saudarPessoa(pessoa);
console.log(saudacao); // Output: Olá, Maria! Você tem 30 anos.


// Função que modifica o nome de uma pessoa
function modificarNome(pessoa: Pessoa, novoNome: string): void {
    pessoa.nome = novoNome;
}

// Chamando a função para modificar o nome da pessoa
console.log("Nome antes da modificação:", pessoa.nome); // Output: Maria
modificarNome(pessoa, "Joana");
console.log("Nome depois da modificação:", pessoa.nome); // Output: Joana


// Função que imprime informações sobre uma pessoa
function imprimirInfoPessoa(pessoa: Pessoa, mostrarIdade: boolean = true): void {
    console.log(`Nome: ${pessoa.nome}`);
    if (mostrarIdade) {
        console.log(`Idade: ${pessoa.idade}`);
    }
}

// Chamando a função com o objeto Pessoa
imprimirInfoPessoa(pessoa); // Output: Nome: Joana, Idade: 30
imprimirInfoPessoa(pessoa, false); // Output: Nome: Joana
