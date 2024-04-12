for (var i = 0; i < 5; i++) {
    console.log("Número: " + i);
}


// exemplo mais complexo

function encontrarNumerosPrimos(limite) {
    var primos = [];

    // Iterar através dos números até o limite especificado
    for (var numero = 2; numero <= limite; numero++) {
        var ehPrimo = true;

        // Verificar se o número é primo
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        // Se o número for primo, adicioná-lo ao array de primos
        if (ehPrimo) {
            primos.push(numero);
        }
    }

    return primos;
}

// Exemplo de uso da função para encontrar todos os números primos até 50
var primosAte50 = encontrarNumerosPrimos(50);
console.log("Números primos até 50:", primosAte50);

