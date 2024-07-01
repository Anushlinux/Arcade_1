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
    }
        