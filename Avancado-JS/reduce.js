//5- reduce: reduz nosso array a um resultado de uma operação matemática
const numbers = [1, 44, 55];
const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual;
}); //somar todos os números do nosso array
console.log(soma);

