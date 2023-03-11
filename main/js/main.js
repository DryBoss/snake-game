import { snakeStatus, drawSnakeBodyOn as drawSnakeOn, updateSnakeBodyParts as updateSnake } from "./snake.js"
import { generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"
import { gameStatus, snakeDirection, easyButton, rightButton } from "./control.js"
import { drawObstacleOn } from "./obstacle.js";

//element variables
export const gameBoard = document.querySelector(".game-board");

//game variables
export let universalStatus = "pause";
let snakeSpeed = 10;

//default
drawSnakeOn(gameBoard);
generatePointBox();
drawPointOn(gameBoard);
easyButton.classList.add("selected");
rightButton.classList.add("selected");

setInterval(updateGame, 1000/snakeSpeed);

function updateGame () {
  if (gameStatus === "pause") {
    universalStatus = "paused";
  } else if (snakeStatus === "dead") {
    universalStatus = "restart"
  } else {
    universalStatus = "resumed"
    updateSnake(snakeDirection, gameBoard.innerHTML = "");
    drawSnakeOn(gameBoard);
    drawPointOn(gameBoard);
    drawObstacleOn(gameBoard);
  }
};

