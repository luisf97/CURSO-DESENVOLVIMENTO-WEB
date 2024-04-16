// Adiciona um manipulador de evento de clique a todos os botões
$("button").click(function() {
    alert("Botão clicado!");
  });

  // Adiciona um manipulador de evento de clique e foco a todos os botões
$("button").on("click focus", function() {
    alert("Botão clicado ou focado!");
  });

  // Remove o manipulador de evento de clique de todos os botões
$("button").off("click");

// Adiciona um manipulador de evento de clique a todos os elementos <li> dentro de #lista
$("#lista").on("click", "li", function() {
    alert("Item da lista clicado!");
  });
  
  // Adiciona um manipulador de evento de clique a todos os botões depois que o DOM estiver pronto
$(document).ready(function() {
    $("button").click(function() {
      alert("Botão clicado!");
    });
  });

  // Evita que o formulário seja enviado
$("form").submit(function(event) {
    event.preventDefault();
  });
  
  // Evita que o formulário seja enviado
$("form").submit(function(event) {
    event.preventDefault();
  });
  