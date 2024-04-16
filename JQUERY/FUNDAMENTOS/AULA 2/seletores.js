
// Seleciona todos os elementos <p>
$("p").css("color", "red");

// Seleciona todos os elementos com a classe "destaque"
$(".destaque").css("font-weight", "bold");

// Seleciona o elemento com o ID "meu-elemento"
$("#meu-elemento").addClass("ativo");

// Seleciona todos os elementos <a> com o atributo "href" começando com "https://"
$("a[href^='https://']").attr("target", "_blank");

// Seleciona o primeiro elemento <div> dentro de #container
$("#container div:first").addClass("primeiro");

// Seleciona o último elemento <li> dentro de #menu
$("#menu li:last").addClass("ultimo");

// Seleciona todos os filhos diretos de #container
$("#container > *").addClass("filho-direto");

// Seleciona todos os irmãos de #meu-elemento
$("#meu-elemento").siblings().addClass("irmao");
