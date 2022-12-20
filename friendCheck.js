const prompt = require('prompt-sync')();


let person = prompt("what is your name? ");
let message;
switch(person){
    case "sam" :
    case "fred" :
    case "clement" :
    case "derrick" :
    case "olivier" :
    case "rene" :
        message = person + " is my friend";
        break;
    default :
    message = "i don't know " + person;                 

}
console.log(message);