function isCaps(letter) {  
    return letter === letter.toUpperCase();
}  

var antiCaps = function(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if(isCaps(str[i])) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}

console.log(antiCaps('HELLO'));