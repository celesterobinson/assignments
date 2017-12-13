var rs = require("readline-sync")

var name = rs.question("What is your full name? ");
var age = rs.question("How old are you? ");
var favoriteColor = rs.question("What is your favorite color? ");
var message = rs.question("Give me a long message: ");
console.log("Your name is " + name.toUpperCase()); 
console.log("You are " + age + " years old, and your favorite color is " + favoriteColor + ".");
console.log("Hey, your favorite color has " + favoriteColor.length + " letters in it!");

var halfMessage = function(message) {
    if (message.length >= 20) {
        var halfMess = message.length / 2;
    } else {
        return message;
    }
    return message.slice(halfMess, message.length);
}

console.log(halfMessage(message) + "\n" + "..... Oh look! That's only half of your message! Whoops...");

var start = rs.question("Let me try to print your question again. Give me a number between 0 and " + message.length + " and I'll start from there and give you the rest. ");

var specificLocation = function(message, start) {
    return message.slice(start, message.length);
}

console.log(specificLocation(message, start) + "\n" + "Cool, huh?");