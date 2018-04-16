var input = prompt("Rock, paper, or scissors. What is your choice?").toLowerCase();
function rockPaperScissors() {
    var arr = ["rock", "paper", "scissors"];
    var play = arr[Math.floor(Math.random()*arr.length)];
    if (input === 'paper' && play === 'rock') {
        alert('Your opponent picked ' + play + '. YOU WIN! :)');
    } else if (input === 'rock' && play === 'paper') {
        alert('Your opponent picked ' + play + ' YOU LOSE. :(');
    } else if (input === 'scissors' && play === 'paper') {
        alert('Your opponent picked ' + play + '. YOU WIN! :)');
    } else if (input === 'paper' && play === 'scissors') {
        alert('Your opponent picked ' + play + ' YOU LOSE. :(');
    } else if (input === 'rock' && play === 'scissors') {
        alert('Your opponent picked ' + play + '. YOU WIN! :)');
    } else if (input === 'scissors' && play === 'rock') {
        alert('Your opponent picked ' + play + ' YOU LOSE. :(');
    } else {
        alert('Your opponent also picked ' + play + '. DRAW!');
    } 
  return play;
}

rockPaperScissors();