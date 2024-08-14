// Variables for elements
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const yourScoreElem = document.querySelector('.your-score');
const computerScoreElem = document.querySelector('.computer-score');
const winLoseElem = document.getElementById('win-lose');

// Variables to store scores
let yourScore = 0;
let computerScore = 0;

// Function to generate a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        yourScore++;
        return 'win';
    } else {
        computerScore++;
        return 'lose';
    }
}

// Function to handle the player's choice
function handlePlayerChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    yourScoreElem.innerText = yourScore;
    computerScoreElem.innerText = computerScore;
    
    // Format the result
    let resultMessage;
    if (result === 'tie') {
        resultMessage = `It's a tie!`;
    } else if (result === 'win') {
        resultMessage = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${computerChoice}.`;
    } else {
        resultMessage = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${playerChoice}.`;
    }
    
    winLoseElem.innerText = resultMessage;
    winLoseElem.style.display = 'block'; // Show the result
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Event listeners for player choices
rock.addEventListener('click', () => handlePlayerChoice('rock'));
paper.addEventListener('click', () => handlePlayerChoice('paper'));
scissors.addEventListener('click', () => handlePlayerChoice('scissors'));
