const options = ["rock", "paper", "scissors"];

//let computerChoice
//let playerChoice

function getComputerInput() { 
    return computerChoice = options[Math.floor(Math.random()*options.length)];
}

function getPlayerInput() {
    input = prompt("What's it going to be: rock, paper or scissors?", '');
    return playerChoice = input.toLowerCase();
}


function playRound() {
    getComputerInput();
    getPlayerInput();
    console.log(playerChoice, computerChoice);
    if (playerChoice === computerChoice) {
        return "draw";
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return "win";
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return "lose";
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return "lose";
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return "win";
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return "lose";
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return "win";
    }
    else {
        return "Try again."
    }
}
let playerScore = Number(0);
let computerScore = Number(0);


function game() {
    var gameResult = playRound();
    if (gameResult === "draw") {
        console.log("You both said the same!")
        console.log(`You: ${playerScore}. Computer: ${computerScore}.`);
    }
    else if (gameResult === "win") {
        playerScore += 1;
        console.log("You win this one!");
        console.log(`You: ${playerScore}. Computer: ${computerScore}.`);
    }
    else {
        computerScore += 1;
        console.log("Too bad, computer wins!");
        console.log(`You: ${playerScore}. Computer: ${computerScore}.`);
    }
}

for (let i=0; i<5; i++) {
game();
}

if (playerScore > computerScore) {
    alert("Well done! You win!")
}
else if (playerScore < computerScore) {
    alert("Oh no! Sorry, you lose!")
}
else {
    alert("After all that, you're tied!")
}

/*function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return `${playerChoice} vs ${computerChoice}? It's a draw!`;
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return "You win! Rock beats scissors!";
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return "You lose! Paper beats rock!";
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return "You lose! Scissors beat paper!";
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return "You win! Paper beats rock!";
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return "You lose! Rock beats scissors!";
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return "You win! Scissors beat paper!";
    }
    else {
        return "Try again."
    }
}*/

//alert(playRound(playerChoice, computerChoice));

