    /*
        Quando você faz uma requisição Ajax, é importante tratar possíveis erros que possam ocorrer durante o processo. Isso garante 
        uma experiência mais robusta para os usuários e ajuda a depurar problemas na sua aplicação. Abaixo estão algumas maneiras de 
        lidar com erros em requisições Ajax usando jQuery:
    */

    /*
        1. Manipulando erros com o método error:
    */

    $.ajax({
    url: "https://api.example.com/data",
    method: "GET",
    success: function(response) {
    // Manipula a resposta bem-sucedida aqui
    console.log(response);
    },
    error: function(xhr, status, error) {
    // Manipula o erro da requisição aqui
    console.error(status + ": " + error);
    }
    });

    /*
        2. Usando o método .fail():
    */

    $.ajax({
    url: "https://api.example.com/data",
    method: "GET"
    })
    .done(function(response) {
    // Manipula a resposta bem-sucedida aqui
    console.log(response);
    })
    .fail(function(xhr, status, error) {
    // Manipula o erro da requisição aqui
    console.error(status + ": " + error);
    });


    /*
        3. Configurando o tratamento de erros globalmente:
    */

    $(document).ajaxError(function(event, xhr, settings, thrownError) {
        // Manipula o erro da requisição aqui
        console.error(xhr.status + ": " + thrownError);
        });

    /*
        4. Verificando o status da resposta dentro do bloco de sucesso:
    */

    $.ajax({
        url: "https://api.example.com/data",
        method: "GET",
        success: function(response) {
        if (response.status === "success") {
            // Manipula a resposta bem-sucedida aqui
            console.log(response.data);
        } else {
            // Manipula erros na resposta aqui
            console.error("Erro na resposta: " + response.error);
        }
        }
    });

    /*
        Lembre-se de que é importante fornecer feedback adequado aos usuários em caso de erro, seja exibindo uma mensagem de erro na interface
         do usuário ou registrando detalhes do erro em algum lugar para depuração futura. Além disso, é recomendável implementar uma lógica de 
         fallback para lidar com situações em que a requisição Ajax falha completamente, como fornecer um comportamento alternativo ou uma
          mensagem de erro amigável para o usuário.
    */
          
        