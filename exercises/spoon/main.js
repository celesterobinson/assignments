var waterBottle = {
    brand: "Mira",
    color: "red",
    volume: 750,
    isInsulated: true,
    description: function() {
        console.log("I'm a " + this.color + " " + this.brand + " water bottle that holds " + this.volume + " mL of water.");
    }
}
waterBottle.description();


var screen = {
    color: "white",
    type: "projector screen",
    isLarge: true,
    description: function () {
        console.log("I'm a " + this.color + " " + this.type + ".");
    }
}
screen.description();

var macbook = {
    color: "space-grey",
    year: 2016,
    size: 13,
    description: function() {
        console.log("I'm a " + this.year + ", " + this.color + " macbook with a " + this.size + " inch screen.");
    }
}
macbook.description();

var iphone = {
    color: "matte black",
    year: 2016,
    model: "7 Plus",
    make: "Apple",
    description: function() {
        console.log("I'm a " + this.year + " " + this.color + " iPhone " + this.model + " smartphone, made by " + this.make + ".");
    }
}
iphone.description();

var sam = {
    hogwartsHouse: "Slytherin",
    skinTone: "black",
    shoeSize: 11,
    isNice: false,
    favoriteFood: "poison",
    description: function() {
        console.log("I'm a " + this.skinTone + " " + this.hogwartsHouse + " with a shoe-size of " + this.shoeSize + ". My favorite food is " + this.favoriteFood + ".");
    }
}
sam.description();
