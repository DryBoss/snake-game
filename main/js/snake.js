//game variables
let snakeBody = [
  {x: 26, y: 26},
  {x: 25, y: 26},
  {x: 24, y: 26}
]

export function updateSnakeBodyParts (snakeMovementDirection) {
  //body parts following each other
  for (let snakeBodyPartIndex = snakeBody.length - 2 /*to catch the 2nd last body part*/; 
  snakeBodyPartIndex >= 0 /*to avoid head*/; 
  snakeBodyPartIndex-- /*to catch all body parts from backward (except head)*/) {
    snakeBody[snakeBodyPartIndex + 1] = { ...snakeBody[snakeBodyPartIndex] }; /*moving snake forward by shifting body part of one index to it's previous index*/
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