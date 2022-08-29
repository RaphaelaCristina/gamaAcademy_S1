const pessoa = {
    nome: "Raphaela",
    idade: 25,
    cidade: "São Paulo"
}

//Notação de ponto
console.log(pessoa.nome); //"Raphaela"

//Notação de colchetes
console.log(pessoa['idade']);

//Destructuring - como desestruturar objetos
const {nome, idade, cidade} = pessoa;
//OBS: Como eu desestruturei o objeto, eu não preciso acessar a pessoa e depois a sua propriedade, posso fazer isso de forma direta
console.log(nome); 
console.log(cidade);
console.log(idade);