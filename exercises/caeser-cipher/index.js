const readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));

let shiftedInput = input => {
    let string = '';
    let charcode = 0;
    
    for(let i = 0; i < input.length; i++) {
        let letters = /([A-Z,a-z])/g.test(input[i]);
        if(letters) {
            charcode = (input[i].charCodeAt()) + shift;
        } else {
            charcode = input[i].charCodeAt();
        }
        string += String.fromCharCode(charcode);
    }
    console.log(string);
}

shiftedInput(input);