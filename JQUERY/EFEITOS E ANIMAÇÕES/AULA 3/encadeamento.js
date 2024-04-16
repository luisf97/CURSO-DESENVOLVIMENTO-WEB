/*
    O encadeamento, também conhecido como encadeamento de métodos, é uma técnica comum em jQuery que permite chamar vários métodos
     consecutivamente em um único objeto jQuery. Isso melhora a legibilidade do código e reduz a quantidade de código repetitivo. 
     Abaixo está um exemplo de como o encadeamento pode ser usado:
*/

// Encadeamento de métodos em jQuery
$("#meu-elemento")
  .css("color", "red") // Define a cor do texto para vermelho
  .slideUp() // Oculta o elemento com uma animação de deslizamento para cima
  .delay(1000) // Aguarda 1 segundo
  .slideDown(); // Mostra o elemento com uma animação de deslizamento para baixo
