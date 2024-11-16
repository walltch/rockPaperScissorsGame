let myScore = {
    wins: 0,
    losses: 0,
    ties: 0
}

let storedScore = localStorage.getItem('myScore');
if (storedScore) {
    myScore = JSON.parse(storedScore);
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


function myMove(myMove) {
    let machineChoice = machineMove();
    if (myMove === machineChoice) {
        console.log('It\'s a tie!');
        myScore.ties++;

    }
    else if (
        myMove === 'rock' && machineChoice === 'scissors' ||
        myMove === 'paper' && machineChoice === 'rock' ||
        myMove === 'scissors' && machineChoice === 'paper') {
        console.log('You win!');
        myScore.wins++;
    }
    else {
        console.log('You lose!');
        myScore.losses++;

    }
    localStorage.setItem("myScore", JSON.stringify(myScore));
    console.log(calculateScore(myScore));
}

function resetScore() {
    myScore.wins = 0;
    myScore.losses = 0;
    myScore.ties = 0;
    console.clear();
    console.log(calculateScore(myScore));
    localStorage.removeItem('myScore');
}
