var concat = function(str1, str2) {
    return str1.concat(str2);
}

console.log("hermione", "ron");

var indexOf = function() {
    var str = "poop";
    return str.indexOf("o", 1);
}

console.log(indexOf());

var lastIndexOf = function(str) {
    return str.lastIndexOf('s');
}

console.log(lastIndexOf("wow i love sponges and stool softener"));

var match = function(str) {
    return str.match(/an/g);
}

console.log(match("Dan the man likes to tan in the sand"));

var replace = function(str) {
    return str.replace("bob", "Sally");
}

console.log(replace("Hi my name's bob"));

var slice = function(str) {
    return str.slice(1, 9);
}

console.log(slice("crusty barn particles"))

var split = function(str) {
    return str.split(" ");
}

console.log(split("I was a string but now I am an array! Cool, huh?"));

var toLowerCase = function(str) {
    return str.toLowerCase();
}

console.log(toLowerCase("I WAS ALL UPPERCASE BUT NOW I AM LOWERCASE"));

var toUpperCase = function(str) {
    return str.toUpperCase();
}

console.log(toUpperCase("i was all lowercase but now i am uppercase"));

var substr = function(str) {
    return str.substr(3, 11);
}

console.log(substr("I have three goats"));