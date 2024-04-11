// Função que soma dois números e retorna o resultado
function sum(a: number, b: number): number {
    return a + b;
}

// Chamando a função
let resultado: number = sum(5, 3);
console.log(resultado); // Output: 8

// Função que imprime uma mensagem com ou sem nome
function saudacao1(nome?: string): void {
    if (nome) {
        console.log(`Olá, ${nome}!`);
    } else {
        console.log("Olá!");
    }
}

// Chamando a função com e sem parâmetro
saudacao1(); // Output: Olá!
saudacao1("Ana"); // Output: Olá, Ana!

// Função que recebe uma lista de números e retorna a soma deles
function somarNumeros(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
}

// Chamando a função com diferentes números de argumentos
let total1: number = somarNumeros(1, 2, 3);
console.log(total1); // Output: 6

let total2: number = somarNumeros(10, 20, 30, 40);
console.log(total2); // Output: 100

// Função que retorna o tipo de uma variável
function tipoVariavel(valor: any): string {
    if (typeof valor === "number") {
        return "Número";
    } else if (typeof valor === "string") {
        return "Texto";
    } else {
        return "Desconhecido";
    }
}

// Chamando a função com diferentes tipos de argumentos
console.log(tipoVariavel(10)); // Output: Número
console.log(tipoVariavel("hello")); // Output: Texto
console.log(tipoVariavel(true)); // Output: Desconhecido

// Função que retorna o primeiro elemento de um array
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

// Chamando a função com diferentes tipos de arrays
console.log(firstElement([1, 2, 3])); // Output: 1
console.log(firstElement(["a", "b", "c"])); // Output: "a"



