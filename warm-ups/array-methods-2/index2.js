function arbitraryPractice(petOwners){
    let output = petOwners.filter((petOwner) => {
        let isOver20 = petOwner.age > 20;
        let hasDogs = checkForDogs(petOwner.pets);
        let hasNicknames = checkForNickname(petOwner.pets); 

        return isOver20 && hasDogs && hasNicknames;
    });

    let names = [];
    for(let i = 0; i < output.length; i++) {
        let petOwner = output[i];
        petOwner.pets.forEach((pet) => {
            names.push(`<li>${pet.name}</li>`);
        })
    }
    console.log(names);
};

function checkForDogs(pets) {
    return pets.some((pet) => {
        return pet.type === "dog";
    })
}

function checkForNickname(pets) {
    return pets.every((pet) => {
        return pet.nickNames.length > 0;
    })
}

data = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
    pets: [
      {
        name: "Alfred",
        type: "dog",
        nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
      },{
        name: "Charles",
        type: "cat",
        nickNames: ["Charley"]
      },{
        name: "Bark Obama",
        type: "dog",
        nickNames: ["Barack", "Mr. President"]
      },{
        name: "Christopher George Latore Wallace",
        type: "dog",
        nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
      }

    ]
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
    pets:  [
      {
        name: "Howard",
        type: "dog",
        nickNames: []
      },{
        name: "Bear",
        type: "dog",
        nickNames: []
      }
    ]
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
    pets:  [
      {
        name: "Bird Person",
        type: "bird",
        nickNames: ["Phoenixperson"]
      },{
        name: "Krombopulos Michael",
        type: "Gromflomite",
        nickNames: ["Assassin man"]
      },{
        name: "Squanchy",
        type: "Cat-person",
        nickNames: ["Squanch", "Smarf", "Thunder Cat"]
      }

    ]
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 23,
    pets:  [
      {
        name: "Morty Jr.",
        type: "Gazorpazorp",
        nickNames: ["Gwendolyn Jr."]
      },{
        name: "Snuffels",
        type: "dog",
        nickNames: ["Snowball"]
      }

    ]
  }
];

arbitraryPractice(data);