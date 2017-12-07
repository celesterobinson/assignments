var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

vegetables.pop();
fruit.shift();
var orange = fruit.indexOf("orange");
fruit.push(1);
var vegeLength = vegetables.length;
vegetables.push(3);
var food = fruit.concat(vegetables);
food.splice(4, 2);
food.reverse();

// console.log(vegeLength);
// console.log("vegetables: ", vegetables);
// console.log("fruit: ", fruit);
// console.log(orange);
// console.log("food: ", food);
console.log(food.join(', '));

