let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let round = 1;
let isFirstRoll = true;

function rollDice() {
    if (isFirstRoll) {
        isFirstRoll = false;
        document.querySelector('#player1Score').innerText = '0';
        document.querySelector('#player2Score').innerText = '0';
        document.querySelector('#results').innerHTML = '';
        return;
    }

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;

    document.querySelector('#dice1').src = `diceImage/dice-${dice1}.png`;
    document.querySelector('#dice2').src = `diceImage/dice-${dice2}.png`;

    updateScores(sum);
    updateResults(dice1, dice2, sum);

    if (round === 11) {
        endGame();
    } else {
        round++;
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateCurrentPlayerDisplay();
    }
}

function updateScores(sum) {
    if (currentPlayer === 1) {
        player1Score += sum;
        document.querySelector('#player1Score').innerText = player1Score;
    } else {
        player2Score += sum;
        document.querySelector('#player2Score').innerText = player2Score;
    }
}

function updateResults(dice1, dice2, sum) {
    const resultsList = document.querySelector('#results');
    const playerName = currentPlayer === 1 ? 'Player 1' : 'Player 2';
    const listItem = document.createElement('li');
    listItem.innerText = `Round ${round}: ${playerName} rolled ${dice1} and ${dice2}, total ${sum}`;
    resultsList.appendChild(listItem);
}

function endGame() {
    const winner = player1Score > player2Score ? 'Player 1' : 'Player 2';
    document.querySelector('#roundWinner').innerText = winner;
    document.querySelector('#roundModal').style.display = 'block';
}

function closeModal() {
    document.querySelector('#roundModal').style.display = 'none';
}

function updateCurrentPlayerDisplay() {
    document.querySelectorAll('.player').forEach((player) => {
        player.classList.toggle('active');
    });
}
// Initialize game
updateCurrentPlayerDisplay();
