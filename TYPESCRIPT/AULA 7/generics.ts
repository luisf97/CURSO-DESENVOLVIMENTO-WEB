// Função que retorna o primeiro elemento de um array
function primeiroElemento<T>(arr: T[]): T {
    return arr[0];
}

// Chamando a função com diferentes tipos de arrays
console.log(primeiroElemento([1, 2, 3])); // Output: 1
console.log(primeiroElemento(["a", "b", "c"])); // Output: "a"

// Classe Pilha genérica
class Pilha<T> {
    private elementos: T[] = [];

    push(elemento: T): void {
        this.elementos.push(elemento);
    }

    pop(): T | undefined {
        return this.elementos.pop();
    }
}

// Criando uma instância da classe Pilha com tipo de número
let pilhaNumeros = new Pilha<number>();
pilhaNumeros.push(1);
pilhaNumeros.push(2);
console.log(pilhaNumeros.pop()); // Output: 2

// Criando uma instância da classe Pilha com tipo de string
let pilhaStrings = new Pilha<string>();
pilhaStrings.push("a");
pilhaStrings.push("b");
console.log(pilhaStrings.pop()); // Output: "b"

// Interface para uma coleção que pode ser iterada
interface Colecao<T> {
    adicionar(item: T): void;
    remover(item: T): void;
    iterar(): IterableIterator<T>;
}

// Implementação da interface Colecao para uma lista
class Lista<T> implements Colecao<T> {
    private itens: T[] = [];

    adicionar(item: T): void {
        this.itens.push(item);
    }

    remover(item: T): void {
        let indice = this.itens.indexOf(item);
        if (indice !== -1) {
            this.itens.splice(indice, 1);
        }
    }

    iterar(): IterableIterator<T> {
        return this.itens[Symbol.iterator]();
    }
}

// Criando uma instância da classe Lista com tipo de número
let listaNumeros = new Lista<number>();
listaNumeros.adicionar(1);
listaNumeros.adicionar(2);
console.log([...listaNumeros.iterar()]); // Output: [1, 2]

// Criando uma instância da classe Lista com tipo de string
let listaStrings = new Lista<string>();
listaStrings.adicionar("a");
listaStrings.adicionar("b");
console.log([...listaStrings.iterar()]); // Output: ["a", "b"]
