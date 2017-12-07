var fizzBuzz = function(n) {
    var output = [];
    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            output.push('fizzbuzz');
        } else if (i % 3 === 0) {
            output.push('fizz');
        } else if (i % 5 === 0) {
            output.push('buzz');
        } else {
            output.push(String(i));
        }
    }
    return output;
};
console.log(fizzBuzz(5));