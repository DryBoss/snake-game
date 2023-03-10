export let obstacles = [];

export function generateObstaclesFor (difficulty) {
  if (difficulty === "medium") {
    obstacles = [
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
    ];
  } else if (difficulty === "hard") {

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