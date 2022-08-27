class Person {
    constructor(name){
        this._name = name; //tornando o atributo "privado";
    }

    get name(){
        return this._name;
    } //acessando os atributos privados dentro da classe

    set name(value){
        this._name = value;
    }
}

let person = new Person('Raphaela');
person.name = 'Claudia'; //mudando o nome da pessoal
console.log(person.name)