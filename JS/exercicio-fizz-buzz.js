//FizzBuzz
//Divisivel por 3 => 'Fizz' ok
//Divisivel por 5 => 'Buzz' ok
//Divisivel por 3 e 5 => 'FizzBuzz' ok
// Se não for um número => 'Não é um número'
// Se não for divisível nem por 3 e nem por 5 => Entrada

let resultado = fizzBuzz(7);
console.log(resultado);

//OBS: Três iguais representa a igualdade de valor e de tipo.

function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 === 0) {
        return 'FizzBuzz';
    } else if (entrada % 3 === 0) {
        return 'Fizz';
    } else if (entrada % 5 === 0) {
        return 'Buzz';
    } else if (typeof entrada !== 'number') {
        return 'Não é um número';
    } else {
        return entrada;
    }
}




