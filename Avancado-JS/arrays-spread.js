//Array
const alunasGama = ['Paula', 'Maria', 'Estela', 'Clara'];
//Acessas ifnormações no array
console.log(alunasGama[2]); //Estela
console.log(alunasGama[0]); //Paula

//Operador spread (...)
//Esse operador trás todos os itens do nosso array e permite-nos copiá-lo sem alterar as informações do array anterior
const alunasXp = [...alunasGama, 'Simara']; //alunasXp tem todos os itens do array alunasGama + a aluna Simara
console.log(alunasXp);

//Métodos de iteração
//map, filter, find, sort e reduce (exemplo nos arquivos com o nome de cada método)

/*for(let i = 0; i < alunasXp.length ; i++){
    console.log(alunasXp[i]);
}*/

