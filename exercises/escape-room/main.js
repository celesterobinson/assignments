let rs = require("readline-sync");

var firstName = rs.question("Morning, sunshine. What's your name? ");

console.log("OMG " + firstName.toUpperCase() + ". I should have known it was you, but honestly there's no way I would have recognized you.");
var activity = rs.question("What were you doing last night? You look TERRIBLE. ");

if (activity.includes("drugs")) {
    console.log("\n~ Here you are again. Locked in a room after a long night of drugs. How will you get out this time," + firstName + "?" + "\n~ You better hurry and get in line at the rehab center, quick!");    
} else {
    console.log("\n~ Oh, come on. We both know you met up with Javier for a good ole shoot-up. \n~ Here we go again. Locked in a room after a long night of drugs. How will you get out this time, " + firstName + " \n~ You better hurry and get in line at the rehab center, quick!");
}

console.log("~ It's easy to get out. (Well not maybe when you're a junkie like you, " + firstName + ". \nListen close, your options are as follows.");

console.log("~ You can: \na) put hand in hole, \n b) open the door, or \n  c) find the key. \nTry not to die today, " + firstName + " Good luck.");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GAME START~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let inv = [];
let isAlive = true;

while (isAlive) {
    let userInput = rs.question("What would you like to do? ");
    userInput = userInput.toLowerCase();
    if (userInput.includes("hand") && userInput.includes("hole")) {
        console.log("~ Of course a junkie like you wouldn't know not to put your hand in a dark suspicious hole in the wall. It was a black hole OF COURSE. You got sucked in and destroyed. You lose. Gosh, " + firstName + ".");
        isAlive = false;
        console.log("GAME OVER");
    } else if (userInput.includes("open") && userInput.includes("door")) {
        if(inv.includes("key")) {
            console.log("~ Congrats, " + firstName + ". Now. Go get yourself some help.");
            break;
        } else {
            console.log("~ " + firstName + ". The door is locked. We've been over this. Find a key.");
        } 
    } else if ((userInput.includes("take") && userInput.includes("key")) || (userInput.includes("find") && userInput.includes("key"))) {
        console.log(" ~ Good job " + firstName + ". For once in your life, you've done something right. You know what to do now.");
        inv.push("key");
    } else if (userInput.includes("look")) {
        console.log(firstName.toUpperCase() + ". YOU'RE IN A LOCKED ROOM. THERE'S A DOOR, A HIDDEN KEY, AND A HOLE IN THE WALL. FIND THE KEY AND GET OUT. IT'S NOT HARD.");
    } else {
        console.log("Go home, " + firstName + ". You're drunk. Ask me something else.");
    }
}