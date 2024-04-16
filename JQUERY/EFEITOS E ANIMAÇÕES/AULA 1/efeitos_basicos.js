// Mostra um elemento com animação
$("#meu-elemento").show("slow");

// Oculta um elemento com animação
$("#meu-elemento").hide("fast");

// Alterna a visibilidade de um elemento com animação
$("#meu-elemento").toggle("slow");

// Desvanece um elemento dentro com animação
$("#meu-elemento").fadeIn("slow");

// Desvanece um elemento fora com animação
$("#meu-elemento").fadeOut("fast");

// Desliza um elemento para dentro com animação
$("#meu-elemento").slideDown("slow");

// Desliza um elemento para fora com animação
$("#meu-elemento").slideUp("fast");

// Anima um elemento para uma posição específica
$("#meu-elemento").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  }, "slow");
  