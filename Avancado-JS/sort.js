//4- Sort: ordena o array
const num = [34, 45, 76, 90, 55, 110];
//OBS: se não passar uma arrow function, por padrão ele vai ordenar por ordem crescente, porém ele entende que todo número que inicia com 1 vem antes
// e coloca números como 1.000, 199, etc a frente de 2, 3, etc.
//const crescente = num.sort(); 
const crescente = num.sort((a, b) => a - b); //pedindo para ordenação olhar o número como um todo e não só o primeiro número
console.log(crescente);
const decrescente = num.sort((a, b) => b - a);
console.log(decrescente);
