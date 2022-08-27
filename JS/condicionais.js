
//ELSE IF
var num = 2;

if (num == 1) {
    console.log('num é igual a 1');
} else if (num == 2) {
    console.log('num é igual a 2');
} else {
    console.log('num não é igual a 1 nem 2');
}

//SWITCH CASE
var mes = 'junho';

switch (mes) {

    case 'janeiro':
        console.log('mês 1');
        break;

    case 'fevereiro':
        console.log('mês 2');
        break;

    case 'março':
        console.log('mês 3');
        break;

    case 'abril':
        console.log('mês 4');
        break;

    case 'maio':
        console.log('mês 5');
        break;

    case 'junho':
        console.log('mês 6, é seu aniversáriooo. Parabéns!');
        break;

    case 'julho':
        console.log('mês 7');
        break;

    case 'agosto':
        console.log('mês 8');
        break;

    case 'setembro':
        console.log('mês 9');
        break;

    case 'outubro':
        console.log('mês 10');
        break;

    case 'novembro':
        console.log('mês 11');
        break;

    case 'dezembro':
        console.log('mês 12');
        break;
        
    default : {
        console.log('Mês inválido!')
    }


}