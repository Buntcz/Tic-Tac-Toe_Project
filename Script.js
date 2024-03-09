const TicTacToe = (function() {

const cells = document.querySelectorAll(".cell");
const currentMsg = document.querySelector(".currentPlayer");
const restartBtn =  document.querySelector(".resetGame");

let boardArray = ["", "", "", "", "", "", "", "", ""];
const winLines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
// player creation
const  createPlayer = (name, marker) => {
  return {name, marker}
};
const name1 = prompt("Enter a name for first player");
const name2 = prompt("Enter a name for second player");
const playerOne = createPlayer(name1, "X")
const playerTwo = createPlayer(name2, "O")


let currentPlayer = playerOne;

let running = false;


function startGame() {
   cells.forEach(cell => 
    cell.addEventListener("click", handleClick));
   restartBtn.addEventListener("click", restartGame);
   currentMsg.textContent = `${currentPlayer.name}'s turn`
   running = true;
}



function handleClick() {
  const index = this.getAttribute("cellIndex");
  if(boardArray[index] != "" || !running) return;
  render(this, index);
  checkWin();
  }


function  render(cell,index) {
  boardArray[index] = currentPlayer.marker;
  cell.textContent = currentPlayer.marker;
  console.log(boardArray)
  switchPlayers();
}

function switchPlayers() {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo 
    currentMsg.textContent = `${currentPlayer.name}'s turn`
  } else {
    currentPlayer = playerOne;
    currentMsg.textContent = `${currentPlayer.name}'s turn`
  }
}

function checkWin() {
  let gameWon = false;
 for(let i = 0; i <= winLines.length; i++) 
 {
 let  winLine = winLines[i];
 let cell1  = boardArray[winLine[0]];
 let cell2 = boardArray[winLine[1]];
 let cell3 = boardArray[winLine[2]];
 if (cell1 == "" || cell2 == "" || cell3 == "") {
  continue;
 }
 
 if (cell1 === "X" && cell1 == cell2 && cell2 == cell3) {
  gameWon = true;
  running = false;
  currentMsg.textContent =  `${playerOne.name} won!`
  break;
 } else if (cell1 === "O" && cell1 == cell2 && cell2 == cell3) {
  gameWon = true;
  running = false;
  currentMsg.textContent = `${playerTwo.name} won!`
  break;
 }  else if (!boardArray.includes("")) {
  currentMsg.textContent = "Draw."
  running = false;
 }
 }
}


function restartGame() {
   boardArray = ["", "", "", "", "", "", "", "", "", ""]
   for(let i = 0; i < boardArray.length; i++) {
    cells.forEach((cell) => cell.textContent = " ");
   }
   currentPlayer = playerOne;
   startGame();
}
return {
  startGame
}

})();

TicTacToe.startGame();