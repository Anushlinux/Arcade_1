document.addEventListener("DOMContentLoaded", () => {
  //creating a gameboard variable to function once the start button is clicked
  const displayController =(() => {
    const renderMessages = (message) => {
      document.querySelector("#result-display").innerHTML=message;
    }
    return {
      renderMessages,
    }
  })();
  const GameBoard= (() => {
   let gameBoard=["", "", "", "", "", "", "", "","" ]
   const render = ()=>{
    let boardHTML = "";
    gameBoard.forEach((square, index) =>{
      boardHTML = boardHTML + `<div class="square" id="square-${index}">${square}</div>`;});
      document.querySelector("#gameBoard").innerHTML = boardHTML;
      const square = document.querySelectorAll(".square");
      square.forEach((square) =>{
        square.addEventListener("click", Game.handleClick)
      } )
    };

    const update =(index, value) => {
    gameBoard[index]=value;
    render();
   };
   const getGameboard = () => gameBoard;
   
   return{
    render,
    update,
    getGameboard
       }

  })();
  //creating a player factory
  const createPlayer = (name, mark) => {
    return {
      name,
      mark,
    };
  };
  // start Game
  const Game = (() =>{
    let players = [];
    let currentPlayerIndex;
    let gameOver;
    const start = () => {
      players = [
        createPlayer(document.querySelector("#playerOne").value,"X"),
        createPlayer(document.querySelector("#playerTwo").value,"O")
                ];
        currentPlayerIndex=0;
        gameOver=false;
        GameBoard.render();
              }
            //handle click function
        const handleClick=(event) =>{
          if (gameOver){
            return;
          }
              let index =parseInt(event.target.id.split("-") [1]);
              if (GameBoard.getGameboard()[index] !==""){
              return;
            }
              GameBoard.update(index,players[currentPlayerIndex].mark);
              if (checkForwin(GameBoard.getGameboard(), players[currentPlayerIndex].name)){
                gameOver=true;
               displayController.renderMessages(
                `${players[currentPlayerIndex].name} won!`)

              }
              else if (checkForTie(GameBoard.getGameboard())){
                gameOver= true;
                displayController.renderMessages(
                  "its a tie!")
              }
             
             currentPlayerIndex = currentPlayerIndex === 0 ? 1: 0;
        }
     const restart = () => {              
      for (let i= 0; i<9; i++){
        GameBoard.update(i, "");
      }
      GameBoard.render();
      gameOver=false;
      document.querySelector("#result-display").innerHTML = "";
      }
        