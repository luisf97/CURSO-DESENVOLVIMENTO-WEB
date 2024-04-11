let numeros: number[] = [1, 2, 3, 4, 5];

// Dobrar cada número usando o método map
let numerosDobrados: number[] = numeros.map(numero => numero * 2);
console.log(numerosDobrados); // Output: [2, 4, 6, 8, 10]

// Filtrar apenas números pares usando o método filter
let numerosPares: number[] = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Output: [2, 4]

// Somar todos os números usando o método reduce
let soma: number = numeros.reduce((total, numero) => total + numero, 0);
console.log(soma); // Output: 15

// Imprimir cada número usando o método forEach
numeros.forEach(numero => console.log(numero));

// Verificar se todos os números são maiores que zero usando o método every
let todosPositivos: boolean = numeros.every(numero => numero > 0);
console.log(todosPositivos); // Output: true

