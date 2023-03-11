import { snakeBody } from "./snake.js"
import { obstacles } from "./obstacle.js"

export let pointPosition;

export function generatePointBox () {
  //generating new position
  do {
    pointPosition = { 
      x: Math.floor(Math.random() * 51) + 1,
      y: Math.floor(Math.random() * 51) + 1
    }
  } while (
    //checking for snake body
    snakeBody.some(bodyPart => {
      return pointPosition.x == bodyPart.x && pointPosition.y == bodyPart.y
    }) ||
    //checking for obstacle
    obstacles.some(obstacle => {
      return pointPosition.x == obstacle.x && pointPosition.y == obstacle.y
    })
  )
}

export function drawPointBoxOn (gameBoard) {
  const pointBox = document.createElement("div");
  pointBox.style.gridColumnStart = pointPosition.x;
  pointBox.style.gridRowStart = pointPosition.y;
  pointBox.classList.add("point");
  gameBoard.appendChild(pointBox);
}