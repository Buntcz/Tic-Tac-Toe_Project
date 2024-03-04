const gameBoard =(function () {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
    const reset = () => {
      for(let i = 0; i < boardArray.length; i++)
      boardArray[i] = "";
    }
    const checkWin = () => {
    const winLines = [
      [0,1,2],[3,4,5],[6,7,8], //Rows
      [0,3,6],[1,4,7],[2,5,8], // Columns
      [0,4,8],[2,4,6] // Diagonals

    ]

  }
  return {
    reset,
    checkWin,
    boardArray};
})();

const newPlayer = (nickname,marker) => {
  this.nickname = nickname;
  this.marker = marker;
}

const gameController = (function () {
  const player1 = newPlayer("player1", "X");
  const player2 = newPlayer("player2", "O");
  const currentPlayer = player1;

  const switchPlayers = function() {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else if (currentPlayer === player2) {
      currentPlayer = player1;
    }
  }

  const getCurrentPlayer = () => currentPlayer;

  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;

  return {
    switchPlayers, getCurrentPlayer, getCurrentPlayer,getPlayer1,getPlayer2
  }
})

const displayController = (function () {
  const cells = document.querySelectorAll(".cell");
  const currentPlayer = document.querySelector(".currentPlayer");
  const resetBtn = document.querySelector(".reset");
  
  }())

 