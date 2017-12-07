// Write a function that accepts two numbers as parameters, and returns the sum.
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2, 9));

// var sum = function(a, b) {
//     return a + b;
// }
// console.log(sum(2, 9));


// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
// function largestNumber(a, b, c) {
//     var largest;
//     if (a > b && a > c) {
//         largest = a;
//     } else if (b > a && b > c) {
//         largest = b;
//     } else {
//         largest = c;
//     }
//     return largest;
// }
// console.log(largestNumber(9, 6, 4));

// var largestNumber = function(a, b, c) {
//     var largest;
//     if (a > b && a > c) {
//         largest = a;
//     } else if (b > a && b > c) {
//         largest = b;
//     } else {
//         largest = c;
//     }
//     return largest;
// }
// console.log(largestNumber(1, 89, 4));


// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// function evenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd"
//     }
// }

// console.log(evenOrOdd(92));

// var evenOrOdd = function(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else if (num % 2 !== 0){
//         return "Odd"
//     }
// }

// console.log(evenOrOdd(10));


// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

// function stringLength(str) {
//     if (str.length <= 20) {
//         return str + str;
//     } else if (str.length > 20) {
//         var halfStr = str.length / 2;
//         return str.slice(0, halfStr);
//     }
// }

// console.log(stringLength('I love most cookies.'));

// var stringLength = function(str) {
//     if (str.length <= 20) {
//         return str + str;
//     } else if (str.length > 20) {
//         var halfStr = str.length / 2;
//         return str.slice(0, halfStr);
//     }
// }

// console.log(stringLength('I love most cookies but hate all people and most cats and murderers.'));

// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// function fibonacciSum(n, output = [0, 1], count = 2) {
//     if (n < 1 || typeof n !== "number") {
//         throw new Error("Invalid input: n must be a positive integer");
//     } else if (n === 1) {
//         var answer = {
//             output: [0],
//             sum : 0
//         }
//         return answer;
//     } else if (n === 2) {
//         var answer = {
//             output: output,
//             sum : output.reduce(function(total, num){
//                 return total + num;
//             })
//         }
//         return answer;
//     } else {
//         output[count] = output[count - 2] + output[count - 1];
//         count++;
//         return fibonacciSum(n - 1, output, count)
//     }
// }   

// console.log(fibonacciSum("troll birth"));


// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)
var quadratic = function(a, b, c) {
    var output1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var output2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);;

    return output1 + ", " + output2;
}

console.log(quadratic(1, 1, -1));

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.

// function frequentLetters(str) {
//     var chars = str.split("");
//     var letterCount = {};
//     var maxCount; 

//     for (var i = 0; i < chars.length; i++) {
//         if (letterCount[chars[i]] === undefined) {
//             letterCount[chars[i]] = 1;
//         } else {
//             letterCount[chars[i]]++;
//         }
//     }
//     for (var i in letterCount) {
//         if (maxCount === undefined) {
//             maxCount = i;
//         } else if (letterCount[i] > letterCount[maxCount]) {
//             maxCount = i;
//         }
//     }
//     return maxCount;
// }


// console.log(frequentLetters("howdy do dah dafdka;djfhpwiefke;v;kjjjjjjjjjjjj"));


