/* 
    Mouse - click, dbclick, mouseover, mouseout, mousedown, mouseup
    Teclado - keydown, keyup, keypress
    Formulário - submit, input, change
    Janelas e Documentos - load, resize, scroll, unload
    Foco - focus, blur
    Touch - touchstart, touchmove, touchend

*/

// Seleciona o elemento pelo ID
const botao = document.getElementById('meuBotao');

// Adiciona um event listener para o evento 'click'
botao.addEventListener('click', function() {
    console.log('O botão foi clicado!');
});


const botao2 = document.getElementById('meuBotao');
const mensagem = 'Botão clicado!';

// Adiciona um event listener para o evento 'click' e passa uma função de callback que usa a mensagem
botao.addEventListener('click', function() {
    console.log(mensagem);
});

const botao3 = document.getElementById('meuBotao');

// Define a função de callback
function minhaFuncao() {
    console.log('O botão foi clicado!');
}

// Adiciona um event listener
botao.addEventListener('click', minhaFuncao);

// Remove o event listener
botao.removeEventListener('click', minhaFuncao);


// Adiciona um event listener para o evento 'keydown' (tecla pressionada)
document.addEventListener('keydown', function(evento) {
    console.log('Tecla pressionada:', evento.key);
});

// Adiciona um event listener para o evento 'keyup' (tecla liberada)
document.addEventListener('keyup', function(evento) {
    console.log('Tecla liberada:', evento.key);
});

const elemento = document.getElementById('meuElemento');

// Adiciona um event listener para o evento 'mouseenter' (mouse entra no elemento)
elemento.addEventListener('mouseenter', function() {
    console.log('Mouse entrou no elemento!');
});

// Adiciona um event listener para o evento 'mouseleave' (mouse sai do elemento)
elemento.addEventListener('mouseleave', function() {
    console.log('Mouse saiu do elemento!');
});


