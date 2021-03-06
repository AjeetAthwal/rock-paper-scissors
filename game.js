// Adding spare copy of code here

// generates a computer move in rock paper scissors
function computerPlay() {
    let num = Math.floor(3 * Math.random());
    if (num == 0) return "rock"
    else if (num == 1) return "scissors";
    return "paper";
}

// return round result for a player loss or win (draws dealt with in playRound)
function roundResult(playerWin, playerSelection, computerSelection) {
    if (playerWin) return "You win! " + playerSelection + " beats " +
        computerSelection;
    else return "You lose! " + computerSelection + " beats " + playerSelection;
}

// function that plays one round of rock paper scissors and returns a result
function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();

    let playerWin = true;

    // game logic
    if (playerSelection === computerSelection) return "Draw!";
    switch (playerSelectionLowerCase) {
        case "rock":
            switch (computerSelectionLowerCase) {
                case "scissors":
                    playerWin = true;
                    break
                case "paper":
                    playerWin = false;
                    break

            }
            break;
        case "paper":
            switch (computerSelectionLowerCase) {
                case "rock":
                    playerWin = true;
                    break
                case "scissors":
                    playerWin = false;
                    break

            }
            break;
        case "scissors":
            switch (computerSelectionLowerCase) {
                case "paper":
                    playerWin = true;
                    break
                case "rock":
                    playerWin = false;
                    break

            }
            break;
    }

    return roundResult(playerWin, playerSelectionLowerCase, computerSelectionLowerCase);
}

// outputs final result given score statistics
function outputFinalResult(playerWins, draws, computerWins) {
    let computerFinalWin = false;
    let playerFinalWin = false;
    if (playerWins > computerWins) playerFinalWin = true;
    else if (computerWins > playerWins) computerFinalWin = true;

    console.log("Final Score:\nPlayer " + playerWins + ", Computer " + computerWins + ", Draws " + draws)
    if (playerFinalWin === true) console.log("Player Wins!")
    else if (computerFinalWin === true) console.log("Computer Wins!")
    else console.log("Draw!")
}

// play 5 rounds and output results
function game() {
    let totalRounds = 5;
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    // play totalRound number of rounds
    for (let roundNumber = 0; roundNumber < totalRounds; roundNumber++) {
        let playerSelection = prompt("ROCK, PAPER, SCISSORS GO!");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "Draw!") draws++;
        else if (result.substring(0, 7) == "You win") playerWins++;
        else computerWins++;
    }

    outputFinalResult(playerWins, draws, computerWins)
}
game()