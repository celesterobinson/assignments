var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Beiber",
      occupation: "Singer"
    },
    {
      name: "Vladmir Putin",
      occupation: "Politition"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }


// var names = [];
// var occupations = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }

// console.log("Names: ", names);
// console.log("Occupations: ", occupations);


var names = [];
var occupations = [];

for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 === 0) {
        names.push(peopleArray[i].name);
    }
    if (i % 2 !== 0) {
        occupations.push(peopleArray[i].occupation);
    }
}

console.log("Names: ", names);
console.log("Occupations: ", occupations);