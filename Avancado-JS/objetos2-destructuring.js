const filmes = [
    {
        id:1,
        titulo: "Dilema das Resdes",
        descricao: "Documentário sobre tecnologia.",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Um filme deterror legal demais.",
        duracao: 120
    },
    {
        id: 3,
        titulo: "Corra",
        descricao: "Um filme de suspensa bem legal.",
        duracao:120
    }
];

const [{id, titulo, descricao, duracao}] = filmes;

filmes.map(filme => console.log(filme.descricao)); //retornando a descrição de cada filme