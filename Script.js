const cell = document.querySelectorAll(".cell")


function Player(name,marker) {
  this.name = name;
  this.marker = marker;
}

const player1 = new Player("player1", "X");
const player2 = new Player("player2", "O");

