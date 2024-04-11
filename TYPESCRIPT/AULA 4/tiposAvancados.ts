// Exemplo de tipos avançados
let numeroOuString: number | string;
numeroOuString = 10;
console.log(numeroOuString);
numeroOuString = "Dez";
console.log(numeroOuString);

// Exemplo de interface
interface Pessoa {
    nome: string;
    idade: number;
}

function saudar(pessoa: Pessoa): void {
    console.log(`Olá, ${pessoa.nome}, você tem ${pessoa.idade} anos.`);
}

let usuario: Pessoa = { nome: "João", idade: 30 };
saudar(usuario);
