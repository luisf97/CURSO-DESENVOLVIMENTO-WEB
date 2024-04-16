// Anima a largura e altura de um elemento
$("#meu-elemento").animate({
    width: '200px',
    height: '200px'
  }, 1000); // Duração da animação em milissegundos

  // Anima o movimento de um elemento
$("#meu-elemento").animate({
    left: '+=100px', // Move 100 pixels para a direita
    top: '+=100px' // Move 100 pixels para baixo
  }, 1000); // Duração da animação em milissegundos
  
  // Anima a cor de fundo de um elemento
$("#meu-elemento").animate({
    backgroundColor: 'blue'
  }, 1000); // Duração da animação em milissegundos
  
  // Anima a opacidade de um elemento
$("#meu-elemento").animate({
    opacity: 0.5
  }, 1000); // Duração da animação em milissegundos
  
  // Anima várias propriedades de um elemento
$("#meu-elemento").animate({
    width: '200px',
    height: '200px',
    opacity: 0.5
  }, 1000); // Duração da animação em milissegundos
  
  // Adiciona animações em fila
$("#meu-elemento").animate({
    width: '200px'
  }, 1000).animate({
    height: '200px'
  }, 1000);
  