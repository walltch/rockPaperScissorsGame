// Default table score object
let scoreResume = {
    myScore: {
        wins: 0,
        losses: 0,
        ties: 0
    },
    myMove: '',
    machineChoice: '',
    gameMessage: '',
    message: ''
}

// Geting references to DOM elements
const gameStatusElement = document.body.querySelector('.gameStatus');
const scoreTableElement = document.body.querySelector('.scoreTable');

// Retrieve stored score from localStorage (if available)
let storedScore = localStorage.getItem('scoreStorageTable');
if (storedScore) {
    scoreResume = JSON.parse(storedScore);
    gameStatusElement.innerText = scoreResume.message;
    scoreTableElement.innerText = calculateScore(scoreResume.myScore);
}
// Function to calculate the score summary
function calculateScore(table) {
    return (
        `Wins: ${table.wins} , losses: ${table.losses}, ties: ${table.ties}`
    )
}
// Function for generating machine move (rock, paper, or scissors)
function machineMove() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    return randomNumber === 1 ? 'rock' : randomNumber === 2 ? 'paper' : 'scissors';
}
// Function to handle the game logique
function myMove(myMove) {
    const machineChoice = machineMove();
    scoreResume.myMove = myMove;
    scoreResume.machineChoice = machineChoice;
    if (myMove === machineChoice) {
        scoreResume.myScore.ties++;
        scoreResume.gameMessage = 'It is a tie';

    }
    else if (
        (myMove === 'rock' && machineChoice === 'scissors') ||
        (myMove === 'paper' && machineChoice === 'rock') ||
        (myMove === 'scissors' && machineChoice === 'paper')
    ) {
        scoreResume.myScore.wins++;
        scoreResume.gameMessage = 'You win';
    }
    else {
        scoreResume.myScore.losses++;
        scoreResume.gameMessage = 'You lose';

    }
    gameStatusElement.innerText = `You chose ${myMove}, machine chose ${machineChoice}. ${scoreResume.gameMessage}`;
    scoreTableElement.innerText = calculateScore(scoreResume.myScore);

    scoreResume.message = gameStatusElement.innerText;
    localStorage.setItem('scoreStorageTable', JSON.stringify(scoreResume));
}

// Function to reset the score
function restartScore() {
    // Update the scoreResume object to reset scores but retain other info like message
    scoreResume.myScore = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    scoreResume.myMove = '';
    scoreResume.machineChoice = '';
    scoreResume.gameMessage = '';
    scoreResume.message = 'Game Restarted';
    scoreTableElement.innerText = calculateScore(scoreResume.myScore);
    gameStatusElement.innerText = scoreResume.message;
    localStorage.setItem('scoreStorageTable', JSON.stringify(scoreResume));
}

function resetGame() {
    // Clear localStorage so that no data is stored
    scoreResume.myScore = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    scoreResume.myMove = '';
    scoreResume.machineChoice = '';
    scoreResume.gameMessage = '';
    scoreResume.message = 'Game Restarted';
    scoreTableElement.innerText = calculateScore(scoreResume.myScore);
    gameStatusElement.innerText = scoreResume.message;
    localStorage.removeItem('scoreStorageTable', JSON.stringify(scoreResume));
}

// function to subcribe element
function subcribeElement() {
    const subscriptionElement = document.body.querySelector('.subcribeElement');
    subscriptionElement.innerText = (subscriptionElement.innerText === 'Subcribe') ? 'Unsubscribe' : 'Subcribe';
}

