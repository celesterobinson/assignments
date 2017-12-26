// let sortedOfAge = (people) => {
//     people = people.filter((person) => {
//          return person.age > 18; 
//     }).sort((person1, person2) => {
//         return person1.lastName.localeCompare(person2.lastName);
//     })
// };

let sortByAge = (people) => {
    return people.sort((p1, p2) => p1.age - p2.age);
}

let displayToHTML = (people) => {
    let sortedPeeps = sortByAge(people);
    sortedPeeps.forEach((person, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${person.firstName} ${person.lastName} is ${person.age} years old.`;
        let id = document.createAttribute("id");
        id.value = i;
        li.setAttributeNode(id);
        li.setAttribute("class", "monkey-juice");
        document.getElementById("list").appendChild(li);
    })
}

let people = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];

displayToHTML(people);

// module.exports = sortedOfAge;