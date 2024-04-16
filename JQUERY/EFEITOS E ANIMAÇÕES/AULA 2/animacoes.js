// Mostra um elemento com animação
$("#meu-elemento").slideDown();

// Oculta um elemento com animação
$("#meu-elemento").slideUp();

// Alterna a visibilidade de um elemento com animação
$("#meu-elemento").slideToggle();

// Desvanece um elemento dentro com animação
$("#meu-elemento").fadeIn();

// Desvanece um elemento fora com animação
$("#meu-elemento").fadeOut();

// Anima a opacidade de um elemento para 50%
$("#meu-elemento").fadeTo("slow", 0.5);

// Anima a largura e altura de um elemento para 200px
$("#meu-elemento").animate({
    width: '200px',
    height: '200px'
  }, "slow");
  