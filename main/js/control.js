import { universalStatus, gameBoard } from "./main.js";
import { snakeStatus, restartSnake, drawSnakeBodyOn as drawSnakeOn } from "./snake.js";
import { generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"
import { generateObstaclesFor } from "./obstacle.js";

//game variables
export let gameStatus = "resume";
export let gameDifficulty = "easy";
export let snakeDirection = "right";

//button variables
const leftButton = document.querySelector("#left");
const upButton = document.querySelector("#up");
export const rightButton = document.querySelector("#right");
const downButton = document.querySelector("#down");
export const playButton = document.querySelector("#play");
const allControlButtons = document.querySelectorAll(".control button");
export const easyButton = document.querySelector("#easy");
const mediumButton = document.querySelector("#medium");
const hardButton = document.querySelector("#hard");
const allDifficultyButtons = document.querySelectorAll(".difficulty button");

//change game difficulty according pressed buttons
easyButton.addEventListener('click', () => snakeDifficultyChange("easy"));
mediumButton.addEventListener('click', () => snakeDifficultyChange("medium"));
hardButton.addEventListener('click', () => snakeDifficultyChange("hard"));

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

//difficulty change functiion
function snakeDifficultyChange (difficulty) {
  switch (difficulty) {
    case "easy":
      if (gameDifficulty !== "easy") {
        gameDifficulty = "easy"
        removeSelectedFrom("difficulty");
        easyButton.classList.add("selected");
        restartSnake();
        generatePointBox();
        drawPointOn(gameBoard);
        generateObstaclesFor(gameDifficulty);
      }
      break;
    case "medium":
      if (gameDifficulty !== "medium") {
        gameDifficulty = "medium"
        removeSelectedFrom("difficulty");
        mediumButton.classList.add("selected");
        restartSnake();
        generatePointBox();
        drawPointOn(gameBoard);
        generateObstaclesFor(gameDifficulty);
      }
      break;
    case "hard":
      if (gameDifficulty !== "hard") {
        gameDifficulty = "hard"
        removeSelectedFrom("difficulty");
        hardButton.classList.add("selected");
        restartSnake();
        generatePointBox();
        drawPointOn(gameBoard);
        generateObstaclesFor(gameDifficulty);
      }
      break;
  }
} 

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



