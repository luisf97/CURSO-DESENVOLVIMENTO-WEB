// DECLARAÇÃO DE FUNÇÃO

function nomeDaFuncao(parametro1, parametro2) {
    // Corpo da função
    // Pode incluir declaração de variáveis, lógica, retorno etc.

    /*
        Este é o tipo mais comum de função em JavaScript. É declarado usando a palavra-chave function, 
        seguida pelo nome da função e seus parâmetros entre parênteses. O corpo da função é colocado entre chaves {}
    */
}

// EXPRESSÃO DE FUNÇÃO

var nomeDaFuncao = function(parametro1, parametro2) {
    // Corpo da função

    /*
        Neste caso, a função é atribuída a uma variável como um valor. O nome da função é opcional (pode ser uma função anônima) 
        e pode ser usado para chamadas recursivas dentro da própria função.
    */
};

// Arrow Functions

const nomeDaFuncao = (parametro1, parametro2) => {
    // Corpo da função

    /*
        Uma forma mais concisa de escrever funções em JavaScript, introduzida no ECMAScript 6. A sintaxe de flecha elimina 
        a necessidade da palavra-chave function e possui um comportamento de escopo de this diferente.
    */
};

// Função anônima

document.addEventListener('click', function() {
    console.log('Clicou no documento.');
});

// Funções Imediatamente Invocadas (IIFE - Immediately Invoked Function Expression):

(function() {
    console.log('Esta função é invocada imediatamente.');
    /*
    São funções que são declaradas e executadas imediatamente após sua definição. São úteis para isolar 
    variáveis do escopo global e evitar poluição no espaço global.
    Esses são os principais tipos de funções em JavaScript. Cada tipo tem seus usos específicos e
    é importante entender quando e como usá-los corretamente.
    */
})();



