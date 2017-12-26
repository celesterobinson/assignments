// Given a string, your task is to remove any duplicated letters from it. 
// Any letters you remove should be added to another string called "duplicates".

// var removeDups = function(str) {
//     var output = {
//         noDups: "",
//         dups: ""
//     }
//     for (var i = 0; i < str.length; i++) {
//         if (output.noDups.indexOf(str[i]) < 0) {
//             output.noDups += str[i];
//         } else {
//             output.dups += str[i];
//         }
//     }
//     return output;
// }

// console.log(removeDups("bookkeeper larry"));

//OR !!! This is better

var removeDups = function(str) {
    var output = {
        noDups: "",
        dups: ""
    }
    for (var i = 0; i < str.length; i++) {
        if (!output.noDups.includes(str[i])) {
            output.noDups += str[i];
        } else {
            output.dups += str[i];
        }
    }   
    return output;
}

console.log(removeDups("bookkeeper larry"));