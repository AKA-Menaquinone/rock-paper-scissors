function getComputerChoice() {
    let computerChoice = Math.random()

    if (computerChoice < (1/3)) {
        return "Rock"
    } else if (computerChoice < 2/3) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice())