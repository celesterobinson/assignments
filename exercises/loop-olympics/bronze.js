// Pushes numbers 0-9 to an array
var num = [];                
var counter = 0;
while (num.length < 10) {
    num.push(counter);
    counter++;
}

console.log(num);


// Prints even numbers 0-100 to the console
for (var i = 0; i < 101; i++) { 
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Loop that pushes every other fruit to an array
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]; 
var oddFruit = [];
for (var i = 0; i < fruit.length; i++) {
    if(i % 2 !== 0) {
        oddFruit.push(fruit[i]);
    }
}

console.log(oddFruit);