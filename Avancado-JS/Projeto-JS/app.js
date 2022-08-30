//Readline-sync Biblioteca que permite receber a entrada de usuários

//Ter acesso a todos os livros da base de livros
const livros = require('./database');
//console.log(livros); //mostrando todos os livros


const readline = require('readline-sync'); //Consigo acessar tudo o que a biblioteca disponibiliza a partir da const readline

const entradaInicial = readline.question('Deseja buscar um livro ? S/N ?'); //Perguntar ao usuário se ele deseja escolher um livro
if(entradaInicial.toLocaleUpperCase() === 'S'){//Se for sim, mostra as categorias disponíveis e pergunta qual categoria ela escolhe
    console.log('Essas são as categorias disponíveis.');
    console.log('Produtividade', '/História brasileira','/Américas', '/Tecnologia', '/Estilo de vida');

    const entradaCategoria = readline.question('Qual categoria você escolhe? ');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria) //para cada livro, retorne o livro.categoria, quando a categoria for igual a entradaCategoria

    console.table(retorno);
} else { //Se for não, mostra todos os livros em ordem crescente pela quantidade de páginas
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    console.log('Essas são todas os livros disponíveis');
    console.table(livrosOrdenados);

}







