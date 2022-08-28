//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior ou igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado

function calculeMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7) {
        return "Aprovado";
    } else if (media < 7 && media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log(calculeMedia(5, 8, 8));




