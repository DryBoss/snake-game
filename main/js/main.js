import { gameStatus, drawSnakeBodyOn as drawSnakeOn, updateSnakeBodyParts as updateSnake } from "./snake.js"
import { generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"
import { snakeDirection } from "./control.js"

//element variables
export const gameBoard = document.querySelector(".game-board");

//game variables
let snakeSpeed = 2;

//default
generatePointBox();
drawSnakeOn(gameBoard);
drawPointOn(gameBoard);

setInterval(updateGame, 500/snakeSpeed);

function updateGame () {
  updateSnake(snakeDirection, gameBoard.innerHTML = "");
  drawSnakeOn(gameBoard);
  drawPointOn(gameBoard);
  gameStatusListener(gameStatus);
};

function gameStatusListener (gameStatus) {
  switch (gameStatus) {
    case "over" :
      alert("Game Over Baby")
      break;
  }
};

