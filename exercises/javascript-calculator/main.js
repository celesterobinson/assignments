const rs = require("readline-sync");

var num1 = rs.question("Please. Tell me one number. ");
var num2 = rs.question("What a great choice! How about another? ");
var operator = rs.question("Good, good. Now. Which operator would you like to apply to these two numbers? +, -, *, or /? ");

var equation = function(num1, num2, operator) {
    return num1 + " " + operator + " " + num2;
}

var verify = rs.question("Okay. So you would like to see the result of " + equation(num1, num2, operator) + "? ");

var result = function(num1, num2, operator) {
    if (verify.includes("y") || verify.includes("Y")) {
        if (operator === '+') {
            return "The result is " + add(num1, num2);
        } else if (operator === '-') {
            return "The result is " + subtract(num1, num2);
        } else if (operator === '*') {
            return "The result is " + multiply(num1, num2);
        } else if (operator === '/') {
            return "The result is " + divide(num1, num2);
        } else {
            return "Woah buddy, that's not a valid operator!"
        }
    } else {
        return "Well, I guess I can't help you. Byyyyyeeee";
    }
}

var add = function(num1, num2) {
    return +num1 + +num2
}

var subtract = function(num1, num2) {
    return +num1 - +num2
}

var multiply = function(num1, num2) {
    return +num1 * +num2
}

var divide = function(num1, num2) {
    return +num1 / +num2
}

console.log(result(num1, num2, operator));