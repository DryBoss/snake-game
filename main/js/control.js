import { universalStatus, gameBoard } from "./main.js";
import { snakeStatus, restartSnake, drawSnakeBodyOn as drawSnakeOn } from "./snake.js";
import { generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"

//game variables
export let gameStatus = "resume"
export let snakeDirection = "right";

//button variables
const leftButton = document.querySelector("#left");
const upButton = document.querySelector("#up");
export const rightButton = document.querySelector("#right");
const downButton = document.querySelector("#down");
export const playButton = document.querySelector("#play");
const allControlButtons = document.querySelectorAll(".control button");
const allDifficultyButtons = document.querySelectorAll(".difficulty button");

//change snake direction according pressed buttons
upButton.addEventListener('click', () => snakeDirectionChange("up"));
leftButton.addEventListener('click', () => snakeDirectionChange("left"));
rightButton.addEventListener('click', () => snakeDirectionChange("right"));
downButton.addEventListener('click', () => snakeDirectionChange("down"));
playButton.addEventListener('click', () => gameStatusChange());

//change snake direction according pressed keys
window.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      snakeDirectionChange("up")
      break;
    case "ArrowLeft":
    case "a":
      snakeDirectionChange("left")
      break;
    case "ArrowRight":
    case "d":
      snakeDirectionChange("right")
      break;
    case "ArrowDown":
    case "s":
      snakeDirectionChange("down")
      break;
    case " ":
      gameStatusChange()
      break;
  }
})

//direction change functions
function snakeDirectionChange (direction) {
  switch (direction) {
    case "up":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "down") {
        snakeDirection = "up";
        removeSelectedFrom("control");
        upButton.classList.add("selected");
      }
      break;
    case "left":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "right") {
        snakeDirection = "left";
        removeSelectedFrom("control");
        leftButton.classList.add("selected");
      }
      break;
    case "right":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "left") {
        snakeDirection = "right";
        removeSelectedFrom("control");
        rightButton.classList.add("selected");
      }
      break;
    case "down":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "up") {
        snakeDirection = "down";
        removeSelectedFrom("control");
        downButton.classList.add("selected");
      }
      break;
  }
}

//game status change function
function gameStatusChange () {
  if (universalStatus === "resumed") {
    gameStatus = "pause"
    playButton.classList.add("play");
    playButton.classList.remove("pause");
  } else if (universalStatus === "paused") {
    gameStatus = "resume"
    playButton.classList.add("pause");
    playButton.classList.remove("play");
  } else {
    gameStatus = "resume"
    playButton.classList.add("pause");
    playButton.classList.remove("reset");
    restartSnake();
    snakeDirection = "right"
    removeSelectedFrom("control");
    rightButton.classList.add("selected");
    generatePointBox();
    drawSnakeOn(gameBoard);
    drawPointOn(gameBoard);
  }
}

//remove selected
export function removeSelectedFrom (type) {
  if (type === "control") {
    allControlButtons.forEach((button) => {
    button.classList.remove("selected");
    }); 
  } else {
    allDifficultyButtons.forEach((button) => {
    button.classList.remove("selected");
    }); 
  }
}



