import { snakeBody } from "./snake";

export let obstacles = [];

export function generateObstaclesFor (difficulty) {
  if (difficulty === "medium") {
    obstacles = [
      //horizontal 1
      {x: 11, y: 11},
      {x: 12, y: 11},
      {x: 13, y: 11},
      {x: 14, y: 11},
      {x: 15, y: 11},
      {x: 16, y: 11},
      {x: 17, y: 11},
      {x: 18, y: 11},
      {x: 19, y: 11},
      {x: 20, y: 11},
      //vertical 1
      {x: 11, y: 12},
      {x: 11, y: 13},
      {x: 11, y: 14},
      {x: 11, y: 15},
      {x: 11, y: 16},
      {x: 11, y: 17},
      {x: 11, y: 18},
      {x: 11, y: 19},
      {x: 11, y: 20},
      //horizontal 2
      {x: 31, y: 11},
      {x: 32, y: 11},
      {x: 33, y: 11},
      {x: 34, y: 11},
      {x: 35, y: 11},
      {x: 36, y: 11},
      {x: 37, y: 11},
      {x: 38, y: 11},
      {x: 39, y: 11},
      {x: 40, y: 11},
      //vertical 2
      {x: 40, y: 12},
      {x: 40, y: 13},
      {x: 40, y: 14},
      {x: 40, y: 15},
      {x: 40, y: 16},
      {x: 40, y: 17},
      {x: 40, y: 18},
      {x: 40, y: 19},
      {x: 40, y: 20},
      //horizontal 3
      {x: 11, y: 31},
      {x: 11, y: 32},
      {x: 11, y: 33},
      {x: 11, y: 34},
      {x: 11, y: 35},
      {x: 11, y: 36},
      {x: 11, y: 37},
      {x: 11, y: 38},
      {x: 11, y: 39},
      {x: 11, y: 40},
      //vertical 3
      {x: 12, y: 40},
      {x: 13, y: 40},
      {x: 14, y: 40},
      {x: 15, y: 40},
      {x: 16, y: 40},
      {x: 17, y: 40},
      {x: 18, y: 40},
      {x: 19, y: 40},
      {x: 20, y: 40},
      //horizontal 4
      {x: 40, y: 31},
      {x: 40, y: 32},
      {x: 40, y: 33},
      {x: 40, y: 34},
      {x: 40, y: 35},
      {x: 40, y: 36},
      {x: 40, y: 37},
      {x: 40, y: 38},
      {x: 40, y: 39},
      {x: 40, y: 40},
      //vertical 4
      {x: 31, y: 40},
      {x: 32, y: 40},
      {x: 33, y: 40},
      {x: 34, y: 40},
      {x: 35, y: 40},
      {x: 36, y: 40},
      {x: 37, y: 40},
      {x: 38, y: 40},
      {x: 39, y: 40},
    ];

  } else if (difficulty === "hard") {
    obstacles = [];
  } else {
    obstacles = [];
  }
}

export function drawObstacleOn (gameBoard) {
  obstacles.forEach(obstacle => {
    const obstaclePart = document.createElement("div");
    obstaclePart.style.gridColumnStart = obstacle.x;
    obstaclePart.style.gridRowStart = obstacle.y;
    obstaclePart.classList.add("obstacle");
    gameBoard.appendChild(obstaclePart);
  });
}