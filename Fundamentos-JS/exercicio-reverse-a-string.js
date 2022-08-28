//Reverse a Sring

let newStr = '';

function reverseAString(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    console.log(newStr);
}

let resultado = reverseAString('Hello Gama Academy');