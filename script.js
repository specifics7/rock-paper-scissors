// Adds delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Computer will randomly decide on rock, paper, or scissors
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else if (randomNum === 2) {
        return "scissors";
    }
}
// Player decides on rock, paper, or scissors
function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors: ");
}
// Play a round of rock paper scissors
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats scissors! Player wins");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Rock loses to paper! Computer wins");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats rock! Player wins");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Paper loses to scissors! Computer wins");
        computerScore++;    
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats paper! Player wins");
        humanScore++;   
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Scissors loses to rock! Computer wins");
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`Player chose ${humanChoice} and computer chose ${computerChoice}. Tie`);
    }
}
// Play a game of rock paper scissors (5 rounds)
async function playGame() {
    let i = 0;
    alert("Please open the browser console to play the game");
    await sleep(5000);
    while (i < 5) {
        console.log(`Round ${i + 1} starting. Get ready...`);
        await sleep(2500);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }

    console.log(`Final Score: Player ${humanScore} Computer ${computerScore}`)
}

let humanScore = 0;
let computerScore = 0;
playGame();