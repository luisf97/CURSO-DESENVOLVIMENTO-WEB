/* 
    Após fazer uma requisição Ajax bem-sucedida, você geralmente precisa manipular a resposta para extrair os dados relevantes e 
    atualizar a página da web de acordo com esses dados. A manipulação da resposta pode variar dependendo do tipo de dados que 
    você está esperando e do formato da resposta (JSON, XML, HTML, etc.). Abaixo estão alguns exemplos de como você pode manipular
    diferentes tipos de respostas em uma requisição Ajax usando jQuery:
*/

/*
    1. Manipulação de resposta JSON:

    Se a resposta da sua requisição for JSON, você pode acessar os dados diretamente na função de sucesso (success) da requisição,
     pois o jQuery automaticamente converte a resposta JSON em um objeto JavaScript. Aqui está um exemplo:
*/

$.ajax({
    url: "https://api.example.com/data",
    method: "GET",
    success: function(response) {
      // Manipula a resposta JSON
      console.log(response); // Exibe os dados no console
      
      // Atualiza a página da web com os dados da resposta
      $("#resultado").text(response.nome);
    },
    error: function(xhr, status, error) {
      // Manipula o erro da requisição
      console.error(status + ": " + error);
    }
  });
  
  /*
    2. Manipulação de resposta XML:

    Se a resposta da sua requisição for XML, você pode usar o método $(data) para converter a resposta em um objeto jQuery e, em seguida, 
    acessar os elementos XML como faria com qualquer outro elemento HTML. Aqui está um exemplo:
  */

    $.ajax({
        url: "https://api.example.com/data",
        method: "GET",
        dataType: "xml",
        success: function(response) {
          // Converte a resposta XML em um objeto jQuery
          var xmlObj = $(response);
          
          // Acessa os elementos XML e manipula os dados
          var nome = xmlObj.find("nome").text();
          
          // Atualiza a página da web com os dados da resposta
          $("#resultado").text(nome);
        },
        error: function(xhr, status, error) {
          // Manipula o erro da requisição
          console.error(status + ": " + error);
        }
      });

    /*
        3. Manipulação de resposta HTML:

        Se a resposta da sua requisição for HTML, você pode inserir o conteúdo diretamente na página da web usando jQuery. Aqui está um exemplo:
    */

        $.ajax({
            url: "https://api.example.com/data",
            method: "GET",
            success: function(response) {
              // Insere o conteúdo HTML na página da web
              $("#resultado").html(response);
            },
            error: function(xhr, status, error) {
              // Manipula o erro da requisição
              console.error(status + ": " + error);
            }
        });
          
      