window.onload = function() {    
    var position = 250;
    var box = document.getElementById("box");
    var timer = setInterval(move, 1);

    function move() {
        if (position >= 250) {
            clearInterval(timer);
        } else {
            position += 1;
            box.style.left = position + "px";
        }
    }
};
