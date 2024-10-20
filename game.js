// Get elements from the DOM
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');
const choicesDiv = document.getElementById('choices');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Choices and corresponding image files
const choices = ['rock', 'paper', 'scissors'];
const choiceImages = {
    rock: 'images/rock.png',
    paper: 'images/paper.png',
    scissors: 'images/scissors.png'
};

// Function to generate computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to capitalize and format choice names
function formatChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

// Function to determine the winner
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    // Determine result based on choices
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        messageDisplay.style.color = 'black';  // Color for tie
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        result = `You win! ${formatChoice(playerChoice)} beats ${formatChoice(computerChoice)}.`;
        messageDisplay.style.color = 'green';  // Color for player win
    } else {
        computerScore++;
        result = `You lose! ${formatChoice(computerChoice)} beats ${formatChoice(playerChoice)}.`;
        messageDisplay.style.color = 'red';  // Color for computer win
    }

    // Update scores and result message
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    messageDisplay.textContent = result;
}


// Function to create dynamic image buttons
function createImageButtons() {
    choices.forEach(choice => {
        const img = document.createElement('img');
        img.src = choiceImages[choice];
        img.alt = formatChoice(choice);
        img.width = 100;
        img.height = 100;
        img.classList.add('mx-3');
        img.style.cursor = 'pointer'; // Make images look clickable
        img.addEventListener('click', () => playRound(choice));
        choicesDiv.appendChild(img);
    });
}

// Reset function
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = `Player: 0`;
    computerScoreDisplay.textContent = `Computer: 0`;
    messageDisplay.textContent = '';
});

// Call the function to dynamically create image buttons
createImageButtons();
