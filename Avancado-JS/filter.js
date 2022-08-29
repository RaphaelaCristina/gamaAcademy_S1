
//2- Filter: retorna um novo array com os elementos filtrados
const numeros = [34, 35, 67, 90, 55, 76];
const numerosImpares = numeros.filter(numero => numero % 2 != 0); //filtrar os números impares do array
console.log(numerosImpares);
const numerosPares = numeros.filter(numero => numero % 2 == 0); //filtrar os números pares do array
console.log(numerosPares);