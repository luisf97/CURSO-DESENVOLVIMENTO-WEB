// * arrow functions let e const, template literals, destructuring

// ARROW FUNCTIONS

/*
  As Arrow Functions (funções de seta) são uma maneira concisa de escrever funções em JavaScript introduzida no 
  ECMAScript 6 (também conhecido como ES6). Elas oferecem uma sintaxe mais curta e algumas diferenças importantes 
  em relação às funções tradicionais. Aqui estão os principais pontos sobre as Arrow Functions:  
*/

// Sintaxe básica de uma Arrow Function
const minhaFuncao = (param1, param2) => {
    // Corpo da função
    return resultado;
};

/*
    Diferenças em relação às funções tradicionais:

    Concisa e Legível: As Arrow Functions são mais concisas e legíveis, especialmente para funções de uma linha.

    this Lexical: O valor de this é definido lexically (em relação ao escopo do bloco) nas Arrow Functions, o que 
    significa que elas não têm seu próprio this. Isso pode ser útil para evitar confusões com o this em funções aninhadas ou em callbacks.
*/

// Função tradicional
function dobrar(x) {
    return x * 2;
}

// Arrow Function equivalente
const dobrar = x => x * 2;


/*
    Não há arguments: Arrow Functions não possuem a variável arguments, portanto, se você precisar acessar os 
    argumentos passados para a função, é necessário usar rest parameters (...args).
*/

const soma = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
};

console.log(soma(1, 2, 3, 4, 5)); // Saída: 15

/*
    Não podem ser usadas como construtores: Arrow Functions não podem ser usadas como construtores e, 
    portanto, não podem ser chamadas com new.
*/

const MeuObjeto = () => {};
const obj = new MeuObjeto(); // Erro: MeuObjeto is not a constructor

/*
    As Arrow Functions são uma adição valiosa ao JavaScript moderno, tornando o código mais conciso e ajudando a evitar 
    armadilhas comuns relacionadas ao escopo de this. No entanto, é importante entender suas limitações e quando é apropriado usá-las.
*/