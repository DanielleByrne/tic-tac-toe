
// grabbing each button with the class of cell and saving it to a variable
const cells = document.querySelectorAll("button.cell")

// grabbing the player turn area 
const playerTurn = document.querySelector(".player-turn")

// grabbing the reset button
const resetButton = document.querySelector(".reset-button")



//setting up an empty array for the game, a current player, and that the game is running
let gameBoard = ['','','','','','','','','',]
let currentPlayer= "O"
let gameActive= true

//looping over each cell and adding an event listener to it
// {once: true} makes it so that it can only be clicked once 

const handleClick = (cell, index) => {
    if (gameActive === true){
        cell.innerHTML= currentPlayer
    } else (console.log("game isn't active"))
    console.log(currentPlayer, index)
}


// adding an event listener to each button with cell class
cells.forEach((cell, index ) => {
    cell.addEventListener("click", handleClick(cell, index), {once: true})
})




const playerXWins = "Player X Won"
const playerOWins = "Player O Won"
const tie = "Tie"


