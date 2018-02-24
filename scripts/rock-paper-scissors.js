// variables
let playerSelection = '';
let computerSelectionNum = 0;
let computerSelection = '';
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;
let currentScore = '';
let currentRound = 0;

// need to get and store input from the player's buttons -- I learned here to make sure your <script> is in the dang <body> tag!
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    playerSelection = button.innerHTML.toUpperCase();
    playerChoice.textContent = "You chose " + playerSelection + "!";
    playRound();
  });
});

// need to create dynamic divs that display our results so we don't need to monitor the console for logs
const content = document.querySelector('.content');

const scoreBoard = document.createElement('h4');
scoreBoard.classList.add('score');
scoreBoard.textContent = "Player: " + playerScore + " | " + "Challenger: " + computerScore;

const roundResults = document.createElement('h4');
roundResults.classList.add('results');
roundResults.textContent = '';

const playerChoice = document.createElement('h3');
playerChoice.classList.add('player-choice');
playerChoice.textContent = "Select your weapon!";

const computerChoice = document.createElement('h3');
computerChoice.classList.add('computer-choice');
computerChoice.textContent = "A challenger approaches!";

content.appendChild(playerChoice);
content.appendChild(computerChoice);
content.appendChild(roundResults);
content.appendChild(scoreBoard);

// need to play a single round
function playRound() {
  currentRound++;
  computerCalculation();
  evaluateRoundWinner(playerSelection, computerSelection);
  printScore(currentRound);
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

  computerChoice.textContent = "Challenger chose " + computerSelection + "!";
}

// need to evaluate who wins the round
function evaluateRoundWinner(playerPick, computerPick) {
  let player = playerPick;
  let computer = computerPick;

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
function printScore(round) {
  let roundCounter = round;

  currentScore = "Player: " + playerScore + " | " + "Challenger: " + computerScore;

  roundResults.textContent = "And the winner of Round " + roundCounter + " was... " + roundWinner;
  scoreBoard.textContent = currentScore;

  evaluateMatchWinner(playerScore, computerScore);
}

// need to evaluate who wins the match
function evaluateMatchWinner(playerScore, computerScore) {
  let player = playerScore;
  let computer = computerScore;
  let matchWinnerMessage = "";

  if (player >= 5) {
    matchWinnerMessage = "You were first to 5 points, you are victorious!";
    reset(matchWinnerMessage);
  } else if (computer >= 5) {
    matchWinnerMessage = "The Challenger was first to 5 points, you have been defeated!";
    reset(matchWinnerMessage);
  }
}

// need to create a reset function
function reset(winner) {
  playerSelection = '';
  computerSelectionNum = 0;
  computerSelection = '';
  roundWinner = '';
  playerScore = 0;
  computerScore = 0;
  currentScore = '';
  currentRound = 0;
  matchWinnerMessage = "";

  playerChoice.textContent = "Select your weapon!";
  computerChoice.textContent = "A challenger approaches!";

  roundResults.textContent = winner;
}

// END CODE
