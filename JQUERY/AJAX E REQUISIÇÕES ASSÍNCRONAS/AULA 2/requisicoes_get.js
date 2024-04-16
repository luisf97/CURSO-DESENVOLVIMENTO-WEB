/*
    Ajax (Asynchronous JavaScript and XML) é uma técnica que permite atualizar partes específicas de uma página da web sem precisar 
    recarregar a página inteira. Com jQuery, você pode fazer requisições Ajax de forma fácil e eficiente. Abaixo está um exemplo de 
    como você pode fazer uma requisição GET usando jQuery:
*/

// Faz uma requisição GET para uma URL e manipula a resposta
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
    url: A URL para a qual você está fazendo a requisição.
    method: O método HTTP da requisição (GET, POST, PUT, DELETE, etc.).
    success: Uma função a ser executada se a requisição for bem-sucedida. A resposta da requisição é passada como argumento para esta função.
    error: Uma função a ser executada se a requisição falhar. Os detalhes do erro (status e mensagem) são passados como argumentos para esta função.
    
    Você pode fazer várias operações com a resposta da requisição dentro da função success, como atualizar o conteúdo de uma página da web,
     preencher um formulário, ou qualquer outra ação que você precisar realizar com os dados obtidos da requisição.
  */