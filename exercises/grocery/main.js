var shopper = {
    name: "Celeste",
    age: 25,
    likesFood: true,
    groceryCart: ["Milk", "Eggs", "Butter", "Bananas", "Broccoli", "Romaine", "Tomatoes", "Bread"],
    description: function() {
        return "My name is " + this.name + ". I am " + this.age + " years old. Today I bought " + this.groceryCart + " at the local store.";
    }
}

console.log(shopper.description());
