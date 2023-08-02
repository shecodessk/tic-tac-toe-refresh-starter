const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    
    console.log("TEST COMMAND");


  }
  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    //empty grid
    let empty = true;
    grid.forEach(row => row.forEach(cell =>{ 
      if(cell !== " " ){
        return empty = false} 
      }));
        if (empty) {
          return false;
        }

    //horizontal
    let horizontalWinner;
    grid.forEach(
      row => {
        if (row[0] !== " " && row[0] === row[1] && row[0] === row[2]) {
          horizontalWinner = row[0];
        }
      }
    );
    if (horizontalWinner) {
      return horizontalWinner;
    }

    //vertical
    let verticalWinner;
    for (let i = 0; i < 3; i++) {
      if (grid[0][i] !== " " && grid[0][i] === grid[1][i] && grid[0][i] === grid[2][i]) {
        verticalWinner = grid[0][i];
      }
    }
    if (verticalWinner) {
      return verticalWinner;
    }

    //diagonal
    let diagonalWinner;

    if (grid[0][0] !== " " && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
      diagonalWinner = grid[0][0];
    }

    if (grid[2][0] !== " " && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2]) {
      diagonalWinner = grid[2][0];
    }

    if (diagonalWinner) {return diagonalWinner}

    //tie
    let tie = "T";
    grid.forEach(
      row => {
        row.forEach(
          cell => {
            if (cell === " ") {tie = false}
          }
        );
      }
    );
    return tie;

    }
  

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
