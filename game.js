//construct game board
//empty 3x3 array
const gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

//construct player 1 and player 2
//player 1 is X, player 2 is O
const player1 = "X";
const player2 = "O";

//track turns
let currentPlayer = player1;

//function to switch players
function switchPlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}
//check for win
function checkWin() {
  //check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] === currentPlayer &&
      gameBoard[i][1] === currentPlayer &&
      gameBoard[i][2] === currentPlayer
    ) {
      return true;
    }
  }
  //check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[0][i] === currentPlayer &&
      gameBoard[1][i] === currentPlayer &&
      gameBoard[2][i] === currentPlayer
    ) {
      return true;
    }
  }
  //check diagonals
  if (
    gameBoard[0][0] === currentPlayer &&
    gameBoard[1][1] === currentPlayer &&
    gameBoard[2][2] === currentPlayer
  ) {
    return true;
  }
  if (
    gameBoard[0][2] === currentPlayer &&
    gameBoard[1][1] === currentPlayer &&
    gameBoard[2][0] === currentPlayer
  ) {
    return true;
  }
  return false;
}

//check for draw
function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

//log existing board
function logBoard() {
  console.log("Current Game Board:");
  for (let i = 0; i < 3; i++) {
    console.log(gameBoard[i]);
  }
}

//log player turn
function logTurn() {
  console.log("Current Player Turn: " + currentPlayer);
}

//get player input as an array of coordinates
function getPlayerInput() {
  const input = prompt(
    "Enter your move (row and column) separated by a space:"
  );
  const [row, col] = input.split(" ").map(Number);
  return [row, col];
}

//update the board with player input
function updateBoard(row, col) {
  if (gameBoard[row][col] === "") {
    gameBoard[row][col] = currentPlayer;
  } else {
    console.log("Invalid move. Try again.");
  }
}

function checkPlayerInput(row, col) {
  if (row < 0 || row > 2 || col < 0 || col > 2) {
    console.log("Invalid input. Please enter row and column between 0 and 2.");
    return false;
  }
  if (gameBoard[row][col] !== "") {
    console.log("Cell already taken. Please choose another cell.");
    return false;
  }
  return true; // Add this line
} // Add this closing brace

//main game loop
function playGame() {
  while (true) {
    logBoard();
    logTurn();
    const [row, col] = getPlayerInput();
    const validInput = checkPlayerInput(row, col);
    if (!validInput) {
      continue;
    }
    updateBoard(row, col);
    if (checkWin()) {
      logBoard();
      console.log("Player " + currentPlayer + " wins!");
      break;
    }
    if (checkDraw()) {
      logBoard();
      console.log("It's a draw!");
      break;
    }
    switchPlayer();
  }
}
//start the game
playGame();
