// grabbing each button with the class of cell and saving it to a variable
const cells = Array.from(document.querySelectorAll("button.cell"));

// grabbing the player turn area
const playerTurn = document.querySelector(".player-turn");

// grabbing the reset button
const resetButton = document.querySelector(".reset-button");

//grabbing the div for the winner alert
const winnerAlert = document.querySelector(".winner-alert");

//setting up an empty array for the game, a current player, and that the game is running
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let gameActive = true;

// the different combinations of ways a player can win
// 0 1 2
// 3 4 5
// 6 7 8
const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [6, 7, 8],
  [2, 5, 8],
  [3, 4, 5],
  [0, 4, 8],
  [6, 4, 2],
  [1, 4, 7],
];

//changes the current player to the next one and updates the html on the page with the current player
const changePlayer = () => {
  currentPlayer = currentPlayer === "x" ? "o" : "x";
  playerTurn.innerHTML = `It's player ${currentPlayer}'s turn`;
};

//is checking to see if the winning combinations have shown up on the game board, it the inner html of the game board is empty then the game is still going
function checkForWinner() {
  let roundOver = false;
  for (let i = 0; i <= 7; i++) {
    const winCombo = winningCombinations[i];
    const a = gameBoard[winCombo[0]];
    const b = gameBoard[winCombo[1]];
    const c = gameBoard[winCombo[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a == b && b == c) {
      roundOver = true;
      break;
    }
  }
  if (roundOver) {
    winnerAlert.classList.remove("hidden");
    winnerAlert.innerHTML= `Player ${currentPlayer} won!`
    gameActive=false
    console.log("round over")
  }
}

const updateGameBoard = (index) => {
  gameBoard[index] = currentPlayer;
};

// handle click function, should on a click add the x or o and give the index of where they clicked
const handleClick = (cell, index) => {
  if (gameActive === true) {
    cell.innerHTML = currentPlayer;
    updateGameBoard(index)
    checkForWinner();
    changePlayer();
  } else console.log("game isn't active");
  console.log(currentPlayer, index);
};

// adding an event listener to each button with cell class
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleClick(cell, index));
});


//reset board


const resetGameBoard= () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true
    winnerAlert.classList.add("hidden")
}

resetButton.addEventListener("click", resetGameBoard)
