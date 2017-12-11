var passwordGenerator = function(n) {
    var password = "";
    for(var i = 0; i < n; i++) {
        password += String.fromCharCode(~~(Math.random() * 93) + 33);
    }
    return password;
}

console.log(passwordGenerator(13));