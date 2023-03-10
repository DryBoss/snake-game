import { gameBoard } from "./main.js"
import { pointPosition, generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"
import { playButton, gameDifficulty } from "./control.js"

//game variables
export let snakeStatus = "alive";
export let snakeBody = [
  {x: 26, y: 26},
  {x: 25, y: 26},
  {x: 24, y: 26}
]

export function restartSnake() {
  snakeStatus = "alive";
  snakeBody = [
    {x: 26, y: 26},
    {x: 25, y: 26},
    {x: 24, y: 26}
  ]
}

export function updateSnakeBodyParts (snakeMovementDirection) {
  //body parts following each other
  for (
    let snakeBodyPartIndex = snakeBody.length - 2; //to catch the 2nd last body part
    snakeBodyPartIndex >= 0; //to avoid head 
    snakeBodyPartIndex-- //to catch all body parts from backward (except head)
    ) {
      //moving snake forward by shifting body part of one index to it's previous index
      snakeBody[snakeBodyPartIndex + 1] = { ...snakeBody[snakeBodyPartIndex] };
  }

  //head going for a new location as user intended
  switch (snakeMovementDirection) {
    case "up" :
      snakeBody[0].y -= 1;
      break;
    case "left" :
      snakeBody[0].x -= 1;
      break;
    case "right" :
      snakeBody[0].x += 1;
      break;
    case "down" :
      snakeBody[0].y += 1;
      break;
  }

  //checking head if it has consumed any point box. if yes, generating new point & expanding snake body
  if (snakeBody[0].x === pointPosition.x && snakeBody[0].y === pointPosition.y) {
    generatePointBox();
    drawPointOn(gameBoard);

    //expanding snake body
    snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
  }

  //checking head if it has touched it self or the box. if yes, game over
  if (
    //checking for box touch
    snakeBody[0].x < 1 ||
    snakeBody[0].x > 51 ||
    snakeBody[0].y < 1 ||
    snakeBody[0].y > 51 ||

    //checking for self touch
    (
      snakeBody.some((bodyPart, index) => {
        if (index !== 0) {
          return snakeBody[0].x === bodyPart.x && snakeBody[0].y === bodyPart.y
        }
      })
    )
  ) {
    snakeStatus = "dead"
    playButton.classList.add("reset");
    playButton.classList.remove("pause");
  }

  //checking head if it has touched any obstacles. if yes, game over
  if (
    (
      gameDifficulty === "medium" &&
      (
        true
      )
    ) || (
      gameDifficulty === "hard"
    )
  ) {
    
  }
}

export function drawSnakeBodyOn (gameBoard) {
  snakeBody.forEach(bodyPart => {
    const snakeBodyPart = document.createElement("div");
    snakeBodyPart.style.gridColumnStart = bodyPart.x;
    snakeBodyPart.style.gridRowStart = bodyPart.y;
    snakeBodyPart.classList.add("snake-body-part");
    gameBoard.appendChild(snakeBodyPart);
  });
}