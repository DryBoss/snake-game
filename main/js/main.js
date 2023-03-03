import { drawSnakeBodyOn as drawSnakeOn, updateSnakeBodyParts as updateSnake } from "./snake.js"
import { generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"
import { snakeDirection } from "./control.js"

//element variables
export const gameBoard = document.querySelector(".game-board");

//game variables
let snakeSpeed = 5;
/**/

//default
generatePointBox();
drawSnakeOn(gameBoard);
drawPointOn(gameBoard);

setInterval(updateGame, 500/snakeSpeed);

function updateGame () {
  updateSnake(snakeDirection, gameBoard.innerHTML = "");
  drawSnakeOn(gameBoard);
  drawPointOn(gameBoard);
};