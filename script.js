let playerScore = 0;
let computerScore = 0;
let updatedPlayerScore;
let updatedComputerScore;
const rck = document.querySelector('#rock');
const ppr = document.querySelector('#paper');
const scrs = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
const options = ["rock", "paper", "scissors"];



const results = document.querySelector('#results');

rck.addEventListener('click', () => {
    const playerChoice = 'rock';
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    console.log(playerChoice + ' ' + computerChoice);
    playRound(playerChoice, computerChoice);
});

ppr.addEventListener('click', () => {
    const playerChoice = 'paper';
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    console.log(playerChoice + computerChoice);
    playRound(playerChoice, computerChoice);
});

scrs.addEventListener('click', () => {
    const playerChoice = 'scissors';
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    console.log(playerChoice + computerChoice);
    playRound(playerChoice, computerChoice);
});

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        //roundResult = "draw";
        console.log("You both said the same!")
        results.textContent = `You: ${playerScore}. Computer: ${computerScore}.`
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') ||(playerChoice === 'scissors' && computerChoice === 'paper') ) {
        //roundResult = "win";
        playerScore += 1;
        updatedPlayerScore = playerScore;
        console.log("You win this one!");
        results.textContent =`You: ${playerScore}. Computer: ${computerScore}.`;
        if (updatedPlayerScore === 5) {
            alert("You win!");
         }
    }
    else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
        //roundResult = "lose";
        computerScore += 1;
        updatedComputerScore = computerScore;
        console.log("Too bad, computer wins!");
        results.textContent =`You: ${playerScore}. Computer: ${computerScore}.`;
        if (updatedComputerScore === 5) {
            alert("You lose!");
        }
    }
}
