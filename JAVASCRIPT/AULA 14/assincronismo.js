// callbacks

// Os callbacks são funções que são passadas como argumentos para outras funções e 
// são executadas posteriormente, geralmente após a conclusão de uma operação assíncrona.

function fazerAlgoAssincrono(callback) {
    setTimeout(function() {
        console.log('A operação assíncrona foi concluída.');
        callback(); // Chama o callback após a conclusão da operação
    }, 1000);
}

console.log('Início da operação assíncrona.');
fazerAlgoAssincrono(function() {
    console.log('Callback executado.');
});


/*
    Promessas (promise)

    As promessas são objetos que representam a conclusão ou o fracasso de uma operação assíncrona. 
    Elas são usadas para lidar com operações assíncronas de uma maneira mais limpa e com menos aninhamento do que os callbacks.
*/

function fazerAlgoAssincrono() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('A operação assíncrona foi concluída.');
            resolve(); // Chama o resolve para indicar sucesso
        }, 1000);
    });
}

console.log('Início da operação assíncrona.');
fazerAlgoAssincrono()
    .then(function() {
        console.log('Promessa resolvida com sucesso.');
    })
    .catch(function(error) {
        console.error('Ocorreu um erro:', error);
    });


    /*
    ASYNC/AWAIT

        As palavras-chave async e await são uma maneira mais limpa e concisa de trabalhar com promessas em JavaScript. 
        O async é usado para definir uma função assíncrona, e o await é usado para esperar que uma promessa seja resolvida dentro dessa função.
    */

        async function fazerAlgoAssincrono() {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    console.log('A operação assíncrona foi concluída.');
                    resolve(); // Chama o resolve para indicar sucesso
                }, 1000);
            });
        }
        
        async function iniciarOperacao() {
            console.log('Início da operação assíncrona.');
            try {
                await fazerAlgoAssincrono();
                console.log('Promessa resolvida com sucesso.');
            } catch (error) {
                console.error('Ocorreu um erro:', error);
            }
        }
        
        iniciarOperacao();
        
    /*
        Esses são os principais conceitos relacionados ao assincronismo em JavaScript. Entender como trabalhar com 
        operações assíncronas é crucial para desenvolver aplicativos modernos e responsivos. As promessas e o async/await 
        são ferramentas poderosas que tornam o código mais legível, organizado e fácil de manter em comparação com os 
        antigos padrões de callbacks.
    */