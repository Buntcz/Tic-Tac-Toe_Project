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

const playerOne = createPlayer("player1", "X")
const playerTwo = createPlayer("player2", "O")


let currentPlayer = playerOne;

let running = false;
// 

startGame();

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
  checkWin();
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
 
 if (cell1 = "X" && cell1 == cell2 && cell2 == cell3) {
  gameWon = true;
  currentMsg.textContent = "Player 1 won!"
  break;
 } else if (cell1 = "O" && cell1 == cell2 && cell2 == cell3) {
  gameWon = true;
  currentMsg.textContent = "Player 2 won!"
  break;
 } 
 checkForTie();
 }
 if (gameWon = true) {
  running = false;
 }
}

function checkForTie() {
  for(let i = 0; i <= boardArray.length; i++) {
    if(boardArray[i] != " ") {
      console.log("Tie!")
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

