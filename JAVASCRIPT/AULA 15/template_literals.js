/*
    Template literals, também conhecidos como template strings, são uma funcionalidade introduzida no ECMAScript 6 (ES6) 
    que permite criar strings com suporte a interpolação de variáveis e expressões. Isso torna a construção de strings 
    mais legível e flexível em comparação com as strings tradicionais delimitadas por aspas simples ou duplas. Aqui 
    estão os principais pontos sobre template literals:
*/

// Usando crase (`) para definir um template literal
const nome = 'João';
const idade = 30;
const frase = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(frase); // Saída: Olá, meu nome é João e tenho 30 anos.

/*
    1. Interpolação de Variáveis: É possível inserir variáveis diretamente dentro de um template literal usando ${}. Isso permite que 
        você inclua valores de variáveis de forma dinâmica dentro da string.

    2. Expressões: Além de variáveis, é possível incluir expressões JavaScript dentro de ${}. Isso pode ser útil para realizar 
        operações simples dentro da string.

    3. Multi-linhas: Template literals permitem que você crie strings multi-linhas sem a necessidade de concatenação ou escapamento de quebras de linha.
*/

const mensagem = `
    Este é um exemplo
    de uma string multi-linhas
    usando template literals.
`;
console.log(mensagem);
/*
Saída:
    Este é um exemplo
    de uma string multi-linhas
    usando template literals.
*/

/*
    Tagged Templates: É possível "marcar" um template literal com uma função, conhecida como "tag function". Isso permite
     processar a string do template de uma maneira customizada antes de ser atribuída à variável.
*/

function minhaTag(strings, ...valores) {
    console.log(strings); // Array contendo as partes literais da string
    console.log(valores); // Array contendo os valores das expressões
}

const name = 'João';
const age = 30;
minhaTag`Olá, meu nome é ${nome} e tenho ${idade} anos.`;
/*
Saída:
    ["Olá, meu nome é ", " e tenho ", " anos."]
    ["João", 30]
*/

/*
    Os template literals são uma adição poderosa ao JavaScript, tornando a manipulação de strings mais expressiva
     e flexível. Eles são amplamente utilizados em aplicações modernas para criar mensagens de usuário dinâmicas, 
     interpolação de dados em templates HTML, construção de consultas SQL, entre outros.
*/
