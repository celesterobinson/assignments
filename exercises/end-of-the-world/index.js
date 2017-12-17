let startClock = document.getElementById("startClock");
let countdown = document.getElementById("countdown");
let content = document.getElementsByClassName("content");
let siren = document.getElementById("siren");
let grenade = document.getElementById("grenade");
let main = document.getElementsByClassName("main");

startClock.addEventListener("click", function(){
    var counter = 20000;
    setInterval(function() {
        let beginningOfTime = new Date(counter);
        let minutes = beginningOfTime.getUTCMinutes();
        let seconds = beginningOfTime.getUTCSeconds();
        let mills = beginningOfTime.getUTCMilliseconds();
        counter -= 20;
        main[0].classList.add("colorTransition");
        siren.play();
        startClock.style.display = "block";
        if (counter >= 0) {
            countdown.innerHTML = minutes + ":" + seconds + ":" + mills;
        }
        if (counter === 0) {
            grenade.play();
            countdown.innerHTML = "THE END HAS COME.";
            clearInterval(counter);
            siren.src = "";
            main[0].classList.add("end");
            startClock.innerHTML = "You shouldn't have clicked me. ):"
        }
    }, 20);
});