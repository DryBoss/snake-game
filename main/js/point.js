import { snakeBody } from "./snake.js"

export let pointPosition;

export function generatePointBox () {
  //generating new position
  pointPosition = { 
    x: Math.floor(Math.random() * 51) + 1,
    y: Math.floor(Math.random() * 51) + 1
  }
  
  //generating position again incase it generated inside snake body
  while (snakeBody.some(bodyPart => {
    pointPosition.x === bodyPart.x && pointPosition.y === bodyPart.y
  })) {
    pointPosition = { 
      x: Math.floor(Math.random() * 51) + 1,
      y: Math.floor(Math.random() * 51) + 1
    }
  }  
}

export function drawPointBoxOn (gameBoard) {
  const pointBox = document.createElement("div");
  pointBox.style.gridColumnStart = pointPosition.x;
  pointBox.style.gridRowStart = pointPosition.y;
  pointBox.classList.add("point");
  gameBoard.appendChild(pointBox);
}