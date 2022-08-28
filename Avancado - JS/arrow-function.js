//function 
/*function soma(a,b){
    return a + b;
}*/

//arrow function

// variavel = (parâmetros) => retorno;
// OBS: Se tivesse mais de uma linha, eu precisaria abrir chaves { }
const soma = (num1, num2) => num1 + num2;

//quando passamos apenas um parâmetro, não precisamos passar parenteses
const sayHello = name => `Hello ${name}`;

console.log(soma(4,2));
console.log(sayHello('Raphaela'));