function sortedDogOwners(petOwners){
   let dogOwners = petOwners.filter((petOwner) => {
        return petOwner.pets.includes("dog");
    });
    return dogOwners.sort((dogOwner1, dogOwner2) => {
        return dogOwner1.age - dogOwner2.age;
    })
}

data = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
    pets: ["dog", "cat"]
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
    pets: ["dog"]
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
    pets: ["cat", "parrot"]
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13,
    pets: ["cat", "parrot", "dog"]
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
    pets: ["dog"]
  }
]

console.log(sortedDogOwners(data));

