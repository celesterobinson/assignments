let count = document.getElementById("count");
let btn = document.getElementById("btn");

let counter = JSON.parse(localStorage.getItem("count")) || 0;
count.innerHTML = counter;
function displayCount(event) {
    counter++;
    localStorage.setItem("count", JSON.stringify(counter));
    count.innerHTML = counter;
}

btn.onclick = displayCount;