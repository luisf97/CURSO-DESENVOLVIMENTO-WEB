const frutas = ['Maçã', 'Banana', 'Laranja', 'Morango'];

frutas.push('Abacaxi');

var ultimoElemento = frutas.pop();

var primeiroElemento = frutas.shift();

frutas.unshift('Limão');

var frutasCitricas = frutas.concat(['Limão', 'Tangerina']);

var subArray = frutas.slice(1, 3); // Retorna os elementos de índice 1 até 2

// Remove 1 elemento a partir do índice 2
var elementosRemovidos = frutas.splice(2, 1);

// Adiciona 'Pêra' e 'Uva' a partir do índice 3, removendo 0 elementos
frutas.splice(3, 0, 'Pêra', 'Uva');

var indiceBanana = frutas.indexOf('Banana');

frutas.forEach(function(fruta) {
    console.log(fruta);
});
