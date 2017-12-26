let isPalindrome = (str) => {
    str = str.toLowerCase();
    str = str.replace(/[\W]/g,"");
    strReverse = str.split('').reverse().join('');
    return str === strReverse;
}

module.exports = isPalindrome;
