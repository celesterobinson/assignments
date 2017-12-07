// var dog = "dog";

// if (typeof dog === 'string') {
//     console.log("It's a string!");
// } else {
//     console.log("It's not a string.");
// }

// var boolean = true;
// if (typeof boolean === 'boolean') {
//     console.log("It's a boolean!");
// } else {
//     console.log("It's not a boolean.");
// }


// if (typeof variable === 'undefined') {
//     console.log("You didn't define your variable!");
// }

// var s = "H";

// if (s.charCodeAt(0) > 90) { 
//     console.log("That letter is higher than the number.");
// } else {
//     console.log(s.charCodeAt(0));    
// }

function numberToString(number) {
    switch(number) {
        case 1:
            return 'one';
        break;
        case 2:
            return 'two';
        break;
        case 3:
            return 'three';
        break;
        case 4:
            return 'four';
        break;
        case 5: 
            return 'five';
        break;
        case 6:
            return 'six';
        break;
        case 7:
            return 'seven';
        break;
        case 8:
            return 'eight';
        break;
        case 9:
            return 'nine';
        break;
        case 10:
            return 'ten';
        break;
        default:
            return 'Enter a valid number you disfunctioning imbecile.'
    }
}

console.log(numberToString(89));