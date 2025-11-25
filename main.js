function getComputerChoice() {
    const computerChoice = Math.random()

    if (computerChoice < (1/3)) {
        return "Rock"
    } else if (computerChoice < 2/3) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?")
    return humanChoice
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice.toLowerCase() === humanChoice.toLowerCase()) {
        console.log(`It's a tie! You both picked ${computerChoice}.`)
    } else if (computerChoice === "Rock" && humanChoice.toLowerCase() === "scissors") {
        console.log("You lose. Rock beats Scissors.")
        computerScore = ++computerScore
    } else if (computerChoice === "Rock" && humanChoice.toLowerCase() === "paper") {
        console.log("You win! Paper beats Rock.")
        humanScore = ++humanScore
    } else if (computerChoice === "Paper" && humanChoice.toLowerCase() === "rock") {
        console.log("You lose. Paper beats Rock.")
        computerScore = ++computerScore
    } else if (computerChoice === "Paper" && humanChoice.toLowerCase() === "scissors") {
        console.log("You win! Scissors beats Paper.")
        humanScore = ++humanScore
    } else if (computerChoice === "Scissors" && humanChoice.toLowerCase() === "rock") {
        console.log("You win! Rock beats Scissors.")
        humanScore = ++humanScore
    } else if (computerChoice === "Scissors" && humanChoice.toLowerCase() === "paper") {
        console.log("You lose. Scissors beats Paper.")
        computerScore = ++computerScore
    }
}

let computerScore = 0
let humanScore = 0

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(computerSelection, humanSelection)