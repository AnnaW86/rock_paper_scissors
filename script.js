let playerScore = 0;
let computerScore = 0;
let updatedPlayerScore;
let updatedComputerScore;
let refresh;
const rck = document.querySelector('#rock');
const ppr = document.querySelector('#paper');
const scrs = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
const options = ["rock", "paper", "scissors"];
const playerAnswer = document.querySelector('#player');
const computerAnswer = document.querySelector('#computer');
const vs = document.querySelector('#vs');
const body = document.querySelector('body');
const results = document.querySelector('#results');


rck.addEventListener('click', () => {
    setupRound('rock');
});

ppr.addEventListener('click', () => {
    setupRound('paper');
});

scrs.addEventListener('click', () => {
    setupRound('scissors');
});

function setupRound(playerChoice) {

    if (playerScore === 5 || computerScore === 5 ) {
        return;
    }
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    playRound(playerChoice, computerChoice);
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        console.log("You both said the same!")
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper') ) {
        playerScore += 1;
        console.log("You win this one!");
    }
    else if ((playerChoice === 'rock' && computerChoice === 'paper') || 
                (playerChoice === 'paper' && computerChoice === 'scissors') ||
                 (playerChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore += 1;
        console.log("Too bad, computer wins!");
    }

    playerAnswer.textContent = playerChoice;
    vs.textContent = 'vs';
    computerAnswer.textContent = computerChoice;
    results.textContent =`You: ${playerScore}. Computer: ${computerScore}.`;

    if (playerScore === 5 ) {
        alert("You win!");
    }
    if (computerScore === 5) {
        alert("You lose!");
    }

}
