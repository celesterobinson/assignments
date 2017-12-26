let or35 = function(n) { 
    if(n % 3 === 0) {
        return true;
    } else if(n % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(or35(10));
module.exports = or35;