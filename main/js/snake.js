import { gameBoard } from "./main.js"
import { pointPosition, generatePointBox, drawPointBoxOn as drawPointOn } from "./point.js"
import { playButton, gameDifficulty, gameStatusChange } from "./control.js"
import { obstacles } from "./obstacle.js";

//game variables
export let snakeStatus = "alive";
export let snakeBody = [
  {x: 26, y: 26},
  {x: 25, y: 26},
  {x: 24, y: 26}
]

//score variables
let score = 0;
const showScore = document.querySelector("#score span");
const showHighScore = document.querySelector("#high-score span");
if (localStorage.getItem("highScore")) {
  showHighScore.innerHTML = localStorage.getItem("highScore");
} else {
  localStorage.setItem("highScore", 0);
}

//death menu
const deathMenu = document.querySelector(".death-menu");
const deathMessage = document.querySelector("#death-message");
export const deathMenuPlayAgain = document.querySelector(".death-menu button");

deathMenuPlayAgain.addEventListener('click', () => gameStatusChange());

let deathMessageGenarated = "keep trying!";

export function restartSnake() {
  deathMenu.style.display = "none";

  score = 0;
  showScore.innerHTML = score;

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
    if (gameDifficulty === "easy") {
      score++;
    } else if (gameDifficulty === "medium") {
      score += 2
    } else {
      score += 4
    }
    showScore.innerHTML = score;
    if (score > localStorage.getItem("highScore")) {
      showHighScore.innerHTML = score;
      localStorage.setItem("highScore", score);
    }

    generatePointBox();
    drawPointOn(gameBoard);

    //expanding snake body
    snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
  }

  //checking head if it has touched it self or the box or any obstacle. if yes, game over
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
    ) ||

    //checking for obstacle touch
    (
      obstacles.some((obstacle) => {
        return snakeBody[0].x === obstacle.x && snakeBody[0].y === obstacle.y
    })
    )
  ) {
    snakeStatus = "dead"

    if (score < 10){
      deathMessageGenarated = "you suck!"
    } else if (score <= localStorage.getItem("highScore")/2) {
      deathMessageGenarated = "keep trying!"
    } else if (score == localStorage.getItem("highScore")) {
      deathMessageGenarated = "you are the best!"
    } else if (score > localStorage.getItem("highScore")/2) {
      deathMessageGenarated = "you got this!"
    }

    deathMessage.innerHTML = deathMessageGenarated + "<br><span>" + score + "</span>"
    deathMenu.style.display = "block";


    playButton.classList.add("reset");
    playButton.classList.remove("pause");
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