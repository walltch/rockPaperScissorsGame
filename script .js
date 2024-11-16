let myScore = {
    wins: 0,
    losses: 0,
    ties: 0
}

function calculateScore(table) {
    return (
        `Wins: ${table.wins} , losses: ${table.losses}, ties: ${table.ties}`
    )
}

function machineMove() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    return randomNumber === 1 ? 'rock' : randomNumber === 2 ? 'paper' : 'scissors';
}

let gameMessage = null;
const gameStatusElement = document.body.querySelector('.gameStatus');
const scoreTableElement = document.body.querySelector('.scoreTable');
function myMove(myMove) {
    let machineChoice = machineMove();
    if (myMove === machineChoice) {
        myScore.ties++;
        gameMessage = 'It is a tie';

    }
    else if (
        myMove === 'rock' && machineChoice === 'scissors' ||
        myMove === 'paper' && machineChoice === 'rock' ||
        myMove === 'scissors' && machineChoice === 'paper') {
        myScore.wins++;
        gameMessage = 'You win';
    }
    else {
        myScore.losses++;
        gameMessage = 'You lose';

    }

    gameStatusElement.innerText = gameMessage;

    scoreTableElement.innerText = calculateScore(myScore);
}

function resetScore() {
    myScore = {
        wins: 0,
        losses: 0,
        ties: 0
    }
    gameStatusElement.innerText = 'Game Restarted';
    scoreTableElement.innerText = calculateScore(myScore);
}
function subcribeElement() {
    const subcriptionElement = document.body.querySelector('.subcribeElement');

    const subcriptionElementText = subcriptionElement.innerText;

    const toggleText = subcriptionElementText === 'Subcribe' ? 'Unsubscribe' : 'Subcribe';
    subcriptionElement.innerText = toggleText;
}