import { drawSnakeBodyOn as drawSnakeOn, updateSnakeBodyParts as updateSnake } from "./snake.js"
import { snakeDirection } from "./control.js"

//element variables
const gameBoard = document.querySelector(".game-board");

//game variables
let snakeSpeed = 5;
/**/

//default
drawSnakeOn(gameBoard);

setInterval(updateGame, 1000/snakeSpeed);

function updateGame () {
  updateSnake(snakeDirection, gameBoard.innerHTML = "");
  drawSnakeOn(gameBoard);
};