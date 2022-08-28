//Capturando elementos do HTML
const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

//Ligando eventos = interações do usuário na nossa página
newListForm.addEventListener('submit', function (e) {

    //Toda vez que o navegador recebe um submit, a página é atualizada, então precisamos previnir isso para não perder os nossos dados
    e.preventDefault();
    const listName = newListInput.value; //pegando o valor

    //Toda vez que o input estiver vazio ou nulo, eu interrompo o processo
    if (listName === null || listName === '') {
        return
    }

    //Populando a lista
    const list = creatList(listName)
    newListInput.value = null; //Limpando o input depois de inserir o item na lista
    lists.push(list) //Incluindo o item na lista
    render(); //Função para mostrar os itens na tela
})

function creatList(name) {
    return { id: Date.now().toString(), name: name }
}

function render() {
    clearElement(listContainer);
    //percorrer a lista de itens
    lists.forEach(function (list) {
        //Jogar a lista capturada para o HTML
        const item = document.createElement('li');
        item.classList.add('item') //adiciona uma class a nossa lista de itens
        item.innerText = list.name; //recebendo como conteudo o list
        listContainer.appendChild(item);//em qual elemento do HTML vai ficar
    })
}

function clearElement(element) {
    //Sempre que eu tiver um elemento e ele for o primeiro da lista, ele será apagado para não repetir
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render();

