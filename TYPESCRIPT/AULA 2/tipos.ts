/*
    number: Para números, tanto inteiros quanto decimais.
    string: Para cadeias de caracteres.
    boolean: Para valores verdadeiro/falso.
    null: Para valores nulos.
    undefined: Para valores indefinidos.
    void: Indica que uma função não retorna nenhum valor.
    any: Um tipo que pode representar qualquer valor.
    never: Indica um tipo que nunca ocorre, como uma função que sempre lança uma exceção ou entra em um loop infinito.
    Array: Uma coleção ordenada de valores de um tipo específico.
    Tuple: Um tipo de array com um número fixo de elementos, onde cada elemento pode ter um tipo específico.
    enum: Uma forma de definir um conjunto de constantes nomeadas.
    object: Representa qualquer valor que não seja um tipo primitivo (number, string, boolean, null, undefined).
    Function: Para representar funções.
    Interface: Uma forma de definir a estrutura de um objeto, incluindo os tipos de suas propriedades e métodos.
    Type Alias: Uma forma de criar um nome para qualquer tipo existente.
*/

// Tipo number para números
let idade: number = 25;
console.log(idade);

// Tipo string para texto
let nome: string = "João";
console.log(nome);

// Tipo boolean para valores verdadeiro/falso
let ativo: boolean = true;
console.log(ativo);

// Tipo null para valores nulos
let valorNulo: null = null;
console.log(valorNulo);

// Tipo undefined para valores indefinidos
let valorIndefinido: undefined = undefined;
console.log(valorIndefinido);

// Tipo void para funções que não retornam valor
function imprimirMensagem(): void {
    console.log("Esta é uma mensagem.");
}
imprimirMensagem();

// Tipo any para qualquer tipo
let qualquerValor: any = 10;
console.log(qualquerValor);
qualquerValor = "texto";
console.log(qualquerValor);

// Tipo Array para coleções ordenadas de um tipo específico
let numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros);

// Tipo Tuple para arrays com número fixo de elementos e tipos específicos
let pessoa: [string, number] = ["Maria", 30];
console.log(pessoa);

// Tipo enum para conjunto de constantes nomeadas
enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
let dia: DiasDaSemana = DiasDaSemana.Quarta;
console.log(dia); // Output: 3

// Tipo object para objetos que não são de tipo primitivo
let objeto: object = { chave: "valor" };
console.log(objeto);

// Tipo Function para funções
let somar: (a: number, b: number) => number = function(a, b) {
    return a + b;
};
console.log(somar(5, 3));

// Tipo Interface para definir estruturas de objetos
interface Pessoa {
    nome: string;
    idade: number;
}
let pessoa1: Pessoa = { nome: "Ana", idade: 25 };
console.log(pessoa1);

// Tipo Type Alias para criar nomes para tipos existentes
type Coordenadas = [number, number];
let ponto: Coordenadas = [10, 20];
console.log(ponto);

