class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos para viver', 'Brian', 500);
let otherBook = new Book('Un Exu en Nova York', 'Cidinha da Silva', 100);
console.log(book.read());
console.log(otherBook.read());
console.log(book,otherBook)