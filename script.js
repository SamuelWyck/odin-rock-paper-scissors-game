function main() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;
    printScores(playerScore, computerScore);

    while (rounds < 5) {
        const score = playRound(playerScore, computerScore);
        playerScore = score[0];
        computerScore = score[1];
        printScores(playerScore, computerScore);
        rounds += 1;
    }
    printWinner(playerScore, computerScore);
}


function playRound(playerScore, computerScore) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    const playerWins = evalRound(playerChoice, computerChoice);

    if (playerWins === 0) {
        computerScore += 1;
    } else if (playerWins === 1) {
        playerScore += 1;
    }
    return [playerScore, computerScore];
}


function evalRound(playerChoice, computerChoice) {
    let playerWins = -1;
    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            playerWins = 0;
        } else if (computerChoice === "scissors") {
            playerWins = 1;
        }

    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            playerWins = 0;
        } else if (computerChoice === "rock") {
            playerWins = 1;
        }

    } else {
        if (computerChoice === "rock") {
            playerWins = 0;
        } else if (computerChoice === "paper") {
            playerWins = 1;
        }
    }
    return playerWins;
}


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let choiceString;
    if (choice === 0) {
        choiceString = "rock";
    } else if (choice === 1) {
        choiceString = "paper";
    } else {
        choiceString = "scissors";
    }
    return choiceString;
}


function getPlayerChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let choice;
    while (true) {
        choice = prompt("Enter your choice:").trim().toLowerCase();
        if (validChoices.includes(choice)) {
            break;
        }
        alert("Not a valid choice!");
    }
    return choice; 
}


function printScores(playerScore, computerScore) {
    console.log(`Player: ${playerScore} \nComputer: ${computerScore}`)
}


function printWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("Draw!");
    }
}



main()