function disemvowel(str) {
    let noVow = "";
    let onlyVow = "";
    for(let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === " ") {
           onlyVow = onlyVow + str[i];
        } else {
            noVow = noVow + str[i];
        }
    }
    return {
        str: noVow,
        vowels: onlyVow
    } 
}

console.log(disemvowel("cats and dogs"));