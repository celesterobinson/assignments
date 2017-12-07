var add = function() {
    var num1 = document.getElementById('firstNumAdd').value;
    var num2 = document.getElementById('secondNumAdd').value;
    num1 = +num1;
    num2 = +num2;
    var sum = document.getElementById('additionSum');
    sum.innerHTML = num1 + num2;
    sum.style.fontSize = '30px';
}

var sub = function() {
    var num1 = document.getElementById('firstNumSub').value;
    var num2 = document.getElementById('secondNumSub').value;
    num1 = +num1;
    num2 = +num2;
    var sum = document.getElementById('subtractionSum');
    sum.innerHTML = num1 - num2;
    sum.style.fontSize = '30px';
}

var mul = function() {
    var num1 = document.getElementById('firstNumMul').value;
    var num2 = document.getElementById('secondNumMul').value;
    num1 = +num1;
    num2 = +num2;
    var product = document.getElementById('multiplyProduct');
    product.innerHTML = num1 * num2;
    product.style.fontSize = '30px';
}


