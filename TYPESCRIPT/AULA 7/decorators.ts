/*
Os decorators são uma funcionalidade avançada do TypeScript que permite adicionar metadados a classes, métodos, acessadores, 
propriedades ou parâmetros de função. Eles são uma forma de modificar ou estender comportamentos de classes e seus membros 
durante o tempo de compilação. Aqui está um exemplo básico de como usar decorators em TypeScript:
*/


function logarAlgo(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
    let metodoOriginal = descritor.value;

    descritor.value = function(...args: any[]) {
        console.log(`O método ${nomePropriedade} foi chamado com os argumentos: ${args}`);
        let resultado = metodoOriginal.apply(this, args);
        console.log(`O resultado foi: ${resultado}`);
        return resultado;
    };

    return descritor;
}


class Calculadora {
    @logarAlgo
    somar(a: number, b: number): number {
        return a + b;
    }
}

// Criando uma instância da classe Calculadora
let calc = new Calculadora();

// Chamando o método somar, que foi decorado
let resultado = calc.somar(5, 3);
// Output:
// O método somar foi chamado com os argumentos: 5,3
// O resultado foi: 8
console.log(resultado); // Output: 8