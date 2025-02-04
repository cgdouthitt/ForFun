const length = 9;
let boardContents = new Array(length);
boardContents.fill(" ");
let player = "X";
let win = false;

function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}

function playGame() {
  for (let i = 0; i < boardContents.length; i++) {
    takeTurn();
    if (win === true) {
      console.log("\n", player, "is the winner!!");
      break;
    }
  }
  if (win === false) {
    console.log("\n No Winner");
  }
}

function takeTurn() {
  makePlay();
  printBoard();
  checkWin();
  if (win === false) {
    changePlayer();
  }
}

function changePlayer() {
  player = player === "X" ? "O" : "X";
}

function makePlay() {
  let randomNumber;
  let foundOpen = false;
  while (foundOpen === false) {
    randomNumber = getRandomNumber();
    if (boardContents[randomNumber] === " ") {
      boardContents.splice(randomNumber, 1);
      boardContents.splice(randomNumber, 0, player);
      foundOpen = true;
    }
  }
}

function checkWin() {
  if (
    boardContents[0] != " " &&
    boardContents[1] != " " &&
    boardContents[2] != " "
  ) {
    if (
      boardContents[0] === boardContents[1] &&
      boardContents[1] === boardContents[2]
    ) {
      win = true;
    }
  }
  if (
    boardContents[3] != " " &&
    boardContents[4] != " " &&
    boardContents[5] != " "
  ) {
    if (
      boardContents[3] === boardContents[4] &&
      boardContents[4] === boardContents[5]
    ) {
      win = true;
    }
  }
  if (
    boardContents[6] != " " &&
    boardContents[7] != " " &&
    boardContents[8] != " "
  ) {
    if (
      boardContents[6] === boardContents[7] &&
      boardContents[7] === boardContents[8]
    ) {
      win = true;
    }
  }
  if (
    boardContents[0] != " " &&
    boardContents[4] != " " &&
    boardContents[8] != " "
  ) {
    if (
      boardContents[0] === boardContents[4] &&
      boardContents[4] === boardContents[8]
    ) {
      win = true;
    }
  }
  if (
    boardContents[2] != " " &&
    boardContents[4] != " " &&
    boardContents[6] != " "
  ) {
    if (
      boardContents[2] === boardContents[4] &&
      boardContents[4] === boardContents[6]
    ) {
      win = true;
    }
  }
  if (
    boardContents[0] != " " &&
    boardContents[3] != " " &&
    boardContents[6] != " "
  ) {
    if (
      boardContents[0] === boardContents[3] &&
      boardContents[3] === boardContents[6]
    ) {
      win = true;
    }
  }
  if (
    boardContents[1] != " " &&
    boardContents[4] != " " &&
    boardContents[7] != " "
  ) {
    if (
      boardContents[1] === boardContents[4] &&
      boardContents[4] === boardContents[7]
    ) {
      win = true;
    }
  }
  if (
    boardContents[2] != " " &&
    boardContents[5] != " " &&
    boardContents[8] != " "
  ) {
    if (
      boardContents[2] === boardContents[5] &&
      boardContents[5] === boardContents[8]
    ) {
      win = true;
    }
  }
}

function printBoard() {
  let board = "\n" + `Current Player ${player}` + "\n\n";

  for (let i = 0; i < boardContents.length; i++) {
    if (i <= 1) {
      board += `${boardContents[i]} | `;
    }
    if (i === 2) {
      board += `${boardContents[i]}`;
      board += "\n---------\n";
    }
    if (i > 2 && i <= 4) {
      board += `${boardContents[i]} | `;
    }
    if (i === 5) {
      board += `${boardContents[i]}`;
      board += "\n---------\n";
    }
    if (i > 5 && i <= 7) {
      board += `${boardContents[i]} | `;
    }
    if (i === 8) {
      board += `${boardContents[i]}`;
    }
  }
  console.log(board);
}

playGame();
