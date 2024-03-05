const cells = document.querySelectorAll(".cell");
const currentMsg = document.querySelector(".currentPlayer");
const restartBtn =  document.querySelector(".resetGame");

const boardArray = ["", "", "", "", "", "", "", "", ""];
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
  const index = this.getAttribute("id");
  if(boardArray[index] != " ") return;
  render(this, index);
  checkWin();
  }


function  render(cell,index) {
  boardArray[index] = currentPlayer.marker;
  cell.textContent = currentPlayer.marker;

}

function switchPlayers() {
 
}

function checkWin() {

}

function restartGame() {

}
