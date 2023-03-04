import { universalStatus } from "./main.js";
import { snakeStatus } from "./snake.js";

//game variables
export let gameStatus = "resume"
export let snakeDirection = "right";

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
      } else {
        gameStatus = "resume"
      }
  }
})
