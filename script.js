const btnDiv = document.querySelector(".btn-div");
const playerScoreSpan = document.querySelector("#p-score");
const computerScoreSpan = document.querySelector("#c-score");
const playerChoiceSpan = document.querySelector("#p-choice");
const computerChoiceSpan = document.querySelector("#c-choice");
const endMessageDiv = document.querySelector(".end-message");

btnDiv.addEventListener("mouseover", function (e) {
    if (e.target.matches("button")) {
        e.target.classList.toggle("btn-hover");
    }
});

btnDiv.addEventListener("mouseout", function (e) {
    if (e.target.matches("button")) {
        e.target.classList.toggle("btn-hover");
    }
});


btnDiv.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        const choice = e.target.textContent;
        playRound(choice);
    }
})



function playRound(playerChoice) {
    if (needGameReset()) {
        resetGame();
    }
    
    const computerChoice = getComputerChoice();
    updateChoices(playerChoice, computerChoice);
    const playerWins = evalRound(playerChoice, computerChoice);

    let gameover = false;
    if (playerWins === 0) {
        gameover = updateScore(computerScoreSpan);
    } else if (playerWins === 1) {
        gameover = updateScore(playerScoreSpan);
    }

    if (gameover) {
        updateEndMessageDiv();
    }
}


function resetGame() {
    endMessageDiv.textContent = "";
    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
}


function needGameReset() {
    if (endMessageDiv.textContent === "") {
        return false;
    }
    return true;
}


function updateEndMessageDiv() {
    const playerScore = parseInt(playerScoreSpan.textContent);
    let endMessage;
    if (playerScore === 5) {
        endMessage = "Player Wins!";
    } else {
        endMessage = "Computer Wins!";
    }
    endMessageDiv.textContent = endMessage;
}


function updateScore(element) {
    let score = parseInt(element.textContent);
    score += 1;
    element.textContent = score;
    let gameover = (score === 5) ? true : false;
    
    return gameover;
}


function updateChoices(playerChoice, computerChoice) {
    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;
}


function evalRound(playerChoice, computerChoice) {
    let playerWins = -1;
    if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            playerWins = 0;
        } else if (computerChoice === "Scissors") {
            playerWins = 1;
        }

    } else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            playerWins = 0;
        } else if (computerChoice === "Rock") {
            playerWins = 1;
        }

    } else {
        if (computerChoice === "Rock") {
            playerWins = 0;
        } else if (computerChoice === "Paper") {
            playerWins = 1;
        }
    }
    return playerWins;
}


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let choiceString;
    if (choice === 0) {
        choiceString = "Rock";
    } else if (choice === 1) {
        choiceString = "Paper";
    } else {
        choiceString = "Scissors";
    }
    return choiceString;
}