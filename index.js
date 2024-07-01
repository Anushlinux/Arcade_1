document.addEventListener("DOMContentLoaded", () => {
  //creating a gameboard variable to function once the start button is clicked
  const displayController = (() => {
    const renderMessages = (message) => {
      document.querySelector("#result-display").innerHTML = message;
    };
    return {
      renderMessages,
    };
  })();
  const GameBoard = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    const render = () => {
      let boardHTML = "";
      gameBoard.forEach((square, index) => {
        boardHTML =
          boardHTML +
          `<div class="square" id="square-${index}">${square}</div>`;
      });
      document.querySelector("#gameBoard").innerHTML = boardHTML;
      const square = document.querySelectorAll(".square");
      square.forEach((square) => {
        square.addEventListener("click", Game.handleClick);
      });
    };

    const update = (index, value) => {
      gameBoard[index] = value;
      render();
    };
    const getGameboard = () => gameBoard;

    return {
      render,
      update,
      getGameboard,
    };
  })();
  //creating a player factory
  const createPlayer = (name, mark) => {
    return {
      name,
      mark,
    };
  };
  // start Game
  const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;
    const start = () => {
      players = [
        createPlayer(document.querySelector("#playerOne").value, "X"),
        createPlayer(document.querySelector("#playerTwo").value, "O"),
      ];
      currentPlayerIndex = 0;
      gameOver = false;
      GameBoard.render();
    };
    //handle click function
    const handleClick = (event) => {
      if (gameOver) {
        return;
      }
      let index = parseInt(event.target.id.split("-")[1]);
      if (GameBoard.getGameboard()[index] !== "") {
        return;
      }
      GameBoard.update(index, players[currentPlayerIndex].mark);
      if (
        checkForwin(GameBoard.getGameboard(), players[currentPlayerIndex].name)
      ) {
        gameOver = true;
        displayController.renderMessages(
          `${players[currentPlayerIndex].name} won!`
        );
      } else if (checkForTie(GameBoard.getGameboard())) {
        gameOver = true;
        displayController.renderMessages("its a tie!");
      }

      currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    };
    const restart = () => {
      for (let i = 0; i < 9; i++) {
        GameBoard.update(i, "");
      }
      GameBoard.render();
      gameOver = false;
      document.querySelector("#result-display").innerHTML = "";
    };

    return {
      start,
      restart,
      handleClick,
    };
  })();
  // Add Check for win function
  function checkForwin(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }
  function checkForTie(board) {
    return board.every((cell) => cell !== "");
  }
  // Add the restart button
  const restartButton = document.querySelector("#resetGame");
  restartButton.addEventListener("click", () => {
    Game.restart();
  });
  // Adding event listener to the start button
  const startButton = document.querySelector("#startGame");
  startButton.addEventListener("click", () => {
    Game.start();
  });
});      
        