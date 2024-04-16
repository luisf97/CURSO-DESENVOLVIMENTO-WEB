// Adiciona um parágrafo ao final do body
$("body").append("<p>Novo parágrafo</p>");

// Remove o elemento com o ID "meu-elemento"
$("#meu-elemento").remove();

// Oculta todos os elementos <div>
$("div").hide();

// Mostra o elemento com o ID "meu-elemento"
$("#meu-elemento").show();

// Alterna a visibilidade do elemento com o ID "meu-elemento"
$("#meu-elemento").toggle();

// Altera o texto de todos os elementos <p>
$("p").text("Novo texto do parágrafo");

// Define o atributo "href" para todos os links
$("a").attr("href", "https://www.example.com");

// Adiciona a classe "ativo" ao elemento com o ID "meu-elemento"
$("#meu-elemento").addClass("ativo");

// Remove a classe "destaque" de todos os elementos <div>
$("div").removeClass("destaque");
