let gameBoard = ['', '', '', '', '', '', '', '', '', ''];
let result = document.querySelector(".result");
let count = 1;
let x = "X";
let o = "O";
let turn = x;
let gameFinished = false;

function game() {

}
function test(val) {
    if (gameFinished) {
        return;
    }

    result.style.visibility = 'hidden';
    let i;
    for (i = 1; i < 10; i++)
        if (val.classList.contains("g" + i))
            break;

    if (gameBoard[i] != '')
        return;

    let cell = document.querySelector(".g" + i);
    cell.textContent = turn;
    gameBoard[i] = turn;

    if (count >= 5) {
        if (gameBoard[1] != '' &&
            gameBoard[1] == gameBoard[2] &&
            gameBoard[2] == gameBoard[3]) {
            finishedGame();
        } else if (gameBoard[4] != '' &&
            gameBoard[4] == gameBoard[5] &&
            gameBoard[5] == gameBoard[6]) {
            finishedGame();
        } else if (gameBoard[7] != '' &&
            gameBoard[7] == gameBoard[8] &&
            gameBoard[8] == gameBoard[9]) {
            finishedGame();
        } else if (gameBoard[1] != '' &&
            gameBoard[1] == gameBoard[4] &&
            gameBoard[4] == gameBoard[7]) {
            finishedGame();
        } else if (gameBoard[2] != '' &&
            gameBoard[2] == gameBoard[5] &&
            gameBoard[5] == gameBoard[8]) {
            finishedGame();
        } else if (gameBoard[3] != '' &&
            gameBoard[3] == gameBoard[6] &&
            gameBoard[6] == gameBoard[9]) {
            finishedGame();
        } else if (gameBoard[1] != '' &&
            gameBoard[1] == gameBoard[5] &&
            gameBoard[5] == gameBoard[9]) {
            finishedGame();
        } else if (gameBoard[3] != '' &&
            gameBoard[3] == gameBoard[5] &&
            gameBoard[5] == gameBoard[7]) {
            finishedGame();
        }
    }

    if (count == 10 && !gameFinished)
        result.textContent = "It's a tie";

    (turn == x) ? turn = o : turn = x;
    count++;
}

function restart() {
    gameBoard = ['', '', '', '', '', '', '', '', '', ''];
    turn = x;
    count = 1;
    result.textContent = turn + " Starts!"
    result.style.visibility = 'visible'
    for (let i = 1; i < 10; i++) {
        document.querySelector(".g" + i).textContent = '';
    }
    gameFinished = false;
}

function finishedGame() {
    result.style.visibility = 'visible'
    result.textContent = turn + " has won!";
    gameFinished = true;
}