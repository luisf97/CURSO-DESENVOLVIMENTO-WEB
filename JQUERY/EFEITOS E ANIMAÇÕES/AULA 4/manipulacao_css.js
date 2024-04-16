/*

    A manipulação de CSS em jQuery permite alterar estilos CSS de elementos HTML de forma dinâmica. Isso é útil para criar efeitos visuais, 
    animações e interações na página da web. Abaixo estão alguns exemplos de como você pode manipular o CSS usando jQuery:
*/

// Define a cor do texto para vermelho
$("#meu-elemento").css("color", "red");

// Define várias propriedades de estilo de uma vez
$("#meu-elemento").css({
    "color": "red",
    "font-size": "16px",
    "background-color": "yellow"
  });
  
  // Obtém o valor da largura do elemento
var largura = $("#meu-elemento").css("width");

// Altera a cor do texto com base em uma condição
if (algumaCondicao) {
    $("#meu-elemento").css("color", "red");
  } else {
    $("#meu-elemento").css("color", "blue");
  }

// Adiciona uma classe CSS ao elemento
$("#meu-elemento").addClass("destaque");

// Remove uma classe CSS do elemento
$("#meu-elemento").removeClass("destaque");

// Alterna a presença da classe CSS no elemento
$("#meu-elemento").toggleClass("ativo");

// Incrementa a largura do elemento em 50 pixels
$("#meu-elemento").css("width", "+=50px");
