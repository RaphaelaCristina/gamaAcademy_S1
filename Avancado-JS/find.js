//3- Find: encontra e retorna o primeiro elemento
//que achar igual ao elemento passado como parâmetro
const produtos = ['geladeira', 'cama', 'fogão', 'mesa'];
const encontraCama = produtos.find(produto => produto === "cama"); //percorra todos os produtos e retorne o que for igual ao produto desejado que no caso é cama
console.log(encontraCama);
const encontraMesa = produtos.find(produto => produto === "mesa"); //percorra todos os produtos e retorne o que for igual ao produto desejado que no caso é mesa
console.log(encontraMesa);