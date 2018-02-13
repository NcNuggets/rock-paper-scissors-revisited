function playGame() {
  // need to create a 5-round game
  for (i = 0; i < TOTALROUNDS; i++) {
    currentRound++;
    getPlayerInput();
    computerCalculation();
    evaluateRoundWinner(playerSelection, computerSelection);
    printScore();
  }

  console.log(evaluateMatchWinner(playerScore,computerScore));
}

const TOTALROUNDS = 5;
let playerSelection;
let computerSelectionNum;
let computerSelection;
let roundWinner;
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let currentScore;

// need to get and store input from the player
function getPlayerInput() {
  playerSelection = prompt("A challenger approaches.  Select your tool! (Rock, Paper, or Scissors?)");

  playerSelection = playerSelection.toUpperCase();

  console.log("You chose " + playerSelection + "!");
}

// need to randomly choose rock, paper, or scissors for the computer
function computerCalculation() {
  computerSelectionNum = Math.floor(Math.random() * 3);

  if (computerSelectionNum === 0) {
    computerSelection = "ROCK";
  } else if (computerSelectionNum === 1) {
    computerSelection = "PAPER";
  } else if (computerSelectionNum === 2) {
    computerSelection = "SCISSORS";
  }

  console.log("Challenger chose " + computerSelection + "!");
}

// need to evaluate who wins the round
function evaluateRoundWinner(playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;

  if (player === "ROCK" && computer === "ROCK") {
    roundWinner = "No one! It was a Tie!";
  } else if (player === "ROCK" && computer === "PAPER") {
    roundWinner = "The Challenger!";
    computerScore++;
  } else if (player === "ROCK" && computer === "SCISSORS") {
    roundWinner = "You!";
    playerScore++;
  } else if (player === "PAPER" && computer === "ROCK") {
    roundWinner = "You!";
    playerScore++;
  } else if (player === "PAPER" && computer === "PAPER") {
    roundWinner = "No one! It was a Tie!";
  } else if (player === "PAPER" && computer === "SCISSORS") {
    roundWinner = "The Challenger!";
    computerScore++;
  } else if (player === "SCISSORS" && computer === "ROCK") {
    roundWinner = "The Challenger!";
    computerScore++;
  } else if (player === "SCISSORS" && computer === "PAPER") {
    roundWinner = "You!";
    playerScore++;
  } else if (player === "SCISSORS" && computer === "SCISSORS") {
    roundWinner = "No one! It was a Tie!";
  }
}

// need to output the score to the console
function printScore() {
  currentScore = "Player: " + playerScore + " | " + "Challenger: " + computerScore;

  console.log("And the winner of Round " + currentRound + " was... " + roundWinner);
  console.log(currentScore);
}

// need to evaluate who wins the game
function evaluateMatchWinner(playerScore, computerScore) {
  let player = playerScore;
  let computer = computerScore;
  let matchWinnerMessage = "";

  if (player > computer) {
    matchWinnerMessage = "You won the match!";
  } else if (computer > player) {
    matchWinnerMessage = "The Challenger won the match!";
  } else {
    matchWinnerMessage = "Nobody won! Go again!";
  }

  return matchWinnerMessage;
}
