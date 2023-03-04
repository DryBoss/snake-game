import { snakeStatus, drawSnakeBodyOn as drawSnakeOn, updateSnakeBodyParts as updateSnake } from "./snake.js"
import { generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"
import { gameStatus, snakeDirection } from "./control.js"

//element variables
export const gameBoard = document.querySelector(".game-board");

//game variables
export let universalStatus = "pause";
let snakeSpeed = 10;

//default
generatePointBox();
drawSnakeOn(gameBoard);
drawPointOn(gameBoard);

setInterval(updateGame, 500/snakeSpeed);

function updateGame () {
  if (gameStatus === "pause") {
    universalStatus = "paused";
  } else if (snakeStatus === "dead") {
    universalStatus = "restart"
  } else if (gameStatus === "resume" && snakeStatus === "dead") {
    
  } else {
    universalStatus = "resumed"
    updateSnake(snakeDirection, gameBoard.innerHTML = "");
    drawSnakeOn(gameBoard);
    drawPointOn(gameBoard);
  }
};

