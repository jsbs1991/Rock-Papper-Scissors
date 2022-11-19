let startGame = ("Lets play rock, paper, scissors");
console.log(startGame);
let maxNumber = 3;
let computerNumber = 0;
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let playerChose = '';//prompt("Rock, Paper, or Scissors");
playerChose = playerChose.toLowerCase();
//console.log(playerChose);
let winner = ''

function getPlayerChoice() { // this function gets the player choice.
    return playerChose = prompt("Rock, Paper, or Scissors");
}
//getPlayerChoice();

function getRandomNumber() { //This function creates a random number between 1 and 3
    computerNumber = Math.floor(Math.random()*maxNumber) + 1;
}

//getRandomNumber();
//console.log(computerNumber);

function getComputerChoice() { // This function determines what the computer choses based by the random number. 
    
    if (computerNumber === 1) {
        computerChoice = 'rock';
    } else if (computerNumber === 2) {
        computerChoice = 'paper';
    } else if  (computerNumber === 3) {
        computerChoice = 'scissors';
    }
}

//getComputerChoice()
//console.log(computerChoice)


function playRound(playerChose, computerChoice) { // this function plays the game. compares the choices and determines a winner.
    if (playerChose === computerChoice) {
        winner = "It's a Tie";
    } else if (playerChose === 'rock' && computerChoice === 'paper') {
        winner = "You Lose!";
    } else if (playerChose === 'rock' && computerChoice === 'scissors') {
        winner = 'You Win!';
    } else if (playerChose === 'scissors' && computerChoice === 'rock') {
        winner = 'You Lose!';
    } else if (playerChose === 'scissors' && computerChoice === 'paper') {
        winner = "You Win!";
    } else if (playerChose === 'paper' && computerChoice === 'rock') {
        winner = "You Win!";
    } else if (playerChose === 'paper' && computerChoice === 'scissors') {
        winner = "You Lose!";
    } else if (playerChose !== 'rock' || playerChose !== 'paper' || playerChose !== 'scissors') {
        winner = "You forfeit!"
    }
}
//playRound(playerChose,computerChoice)
//console.log(winner)


function game() { // This function plays five rounds Rock paper scissors.
    for (let i = 0; i < 5; i++) {
    getRandomNumber();
    getComputerChoice();
    getPlayerChoice();
    playRound(playerChose,computerChoice);
    if (winner === "You Win!") {
        playerScore++;
    } else if (winner === "You Lose!" || winner === "You forfeit!") {
        computerScore++;
    }
    console.log(winner);
}
}
game()
console.log(`The computer score is ${computerScore}.`);
console.log(`The players score is ${playerScore}.`);
