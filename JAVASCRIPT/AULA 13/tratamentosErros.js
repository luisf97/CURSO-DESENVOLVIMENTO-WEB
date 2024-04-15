 /*
    TIPOS DE ERROS EM JAVASCRIPT

    1. Erro de sintaxe: São erros que ocorrem quando o código viola as regras da linguagem JavaScript. Por exemplo, esquecer de fechar aspas 
        em uma string ou usar uma palavra reservada incorretamente.

    2. Erro de referência: Ocorrem quando você tenta acessar uma variável ou função que não foi definida.

    3. Erro de tipo(Type Error): São erros que ocorrem quando você tenta realizar operações com valores de tipos incompatíveis.

    4. Erro de Tempo de Execução (Runtime Error): Ocorrem durante a execução do programa devido a condições imprevistas, 
        como divisão por zero, tentativa de acessar um índice inválido de um array, etc.
 */

    try {
        // Código onde erros podem ocorrer
        throw new Error('Ocorreu um erro!');
    } catch (error) {
        // Bloco de código para lidar com o erro
        console.error(error.message);
    } finally {
        // Bloco de código opcional que é executado sempre, independentemente de ocorrer um erro ou não
        console.log('Execução finalizada.');
    }


    function dividir(dividendo, divisor) {
        if (divisor === 0) {
            throw new Error('Divisão por zero!');
        }
        return dividendo / divisor;
    }

    try {
        var resultado = dividir(10, 0);
        console.log('O resultado da divisão é:', resultado);
    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
    }

    /*
        Dicas para Tratamento de Erros:

        Identifique as partes do código onde erros podem ocorrer e envolva-as em blocos try...catch.
        Use mensagens de erro descritivas para facilitar a identificação e resolução de problemas.
        Considere o uso do bloco finally para executar código que deve ser executado independentemente de ocorrerem erros ou não.
        Evite capturar exceções genéricas demais, pois isso pode ocultar erros reais e dificultar a depuração.
        Tratar erros de forma adequada é crucial para garantir que seu código seja robusto e resiliente a falhas, melhorando a experiência do usuário e facilitando a manutenção do código.
    */
    
        