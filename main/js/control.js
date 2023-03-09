import { universalStatus, gameBoard } from "./main.js";
import { snakeStatus, restartSnake, drawSnakeBodyOn as drawSnakeOn } from "./snake.js";
import { generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"

//game variables
export let gameStatus = "resume"
export let snakeDirection = "right";

//button variables
let upButton = document.querySelector("#up");
let leftButton = document.querySelector("#left");
let rightButton = document.querySelector("#right");
let downButton = document.querySelector("#down");
let playButton = document.querySelector("#play");

////change snake direction according pressed buttons
export function snakeGo(direction) {
  console.log("lets go")
  switch (direction) {
    case "up":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "down") {
        snakeDirection = "up";
      }
      break;
    case "left":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "right") {
        snakeDirection = "left";
      }
      break;
    case "right":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "left") {
        snakeDirection = "right";
      }
      break;
    case "down":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "up") {
        snakeDirection = "down";
      }
      break;
    case "play":
      if (universalStatus === "resumed") {
        gameStatus = "pause"
      } else if (universalStatus === "paused") {
        gameStatus = "resume"
      } else {
        gameStatus = "resume"
        restartSnake();
        snakeDirection = "right"
        generatePointBox();
        drawSnakeOn(gameBoard);
        drawPointOn(gameBoard);
      }
      break;
  }
}

//change snake direction according pressed keys
window.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "down") {
        snakeDirection = "up";
      }
      break;
    case "ArrowLeft":
    case "a":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "right") {
        snakeDirection = "left";
      }
      break;
    case "ArrowRight":
    case "d":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "left") {
        snakeDirection = "right";
      }
      break;
    case "ArrowDown":
    case "s":
      if (gameStatus === "resume" && snakeStatus === "alive" && snakeDirection !== "up") {
        snakeDirection = "down";
      }
      break;
    case " ":
      if (universalStatus === "resumed") {
        gameStatus = "pause"
      } else if (universalStatus === "paused") {
        gameStatus = "resume"
      } else {
        gameStatus = "resume"
        restartSnake();
        snakeDirection = "right"
        generatePointBox();
        drawSnakeOn(gameBoard);
        drawPointOn(gameBoard);
      }
      break;
  }
})
