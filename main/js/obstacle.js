export let obstacles = [];

export function generateObstaclesFor (difficulty) {
  if (difficulty === "medium") {
    obstacles = [
      //corner 1
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
      {x: 11, y: 12},
      {x: 11, y: 13},
      {x: 11, y: 14},
      {x: 11, y: 15},
      {x: 11, y: 16},
      {x: 11, y: 17},
      {x: 11, y: 18},
      {x: 11, y: 19},
      {x: 11, y: 20},
      //corner 2
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
      {x: 40, y: 12},
      {x: 40, y: 13},
      {x: 40, y: 14},
      {x: 40, y: 15},
      {x: 40, y: 16},
      {x: 40, y: 17},
      {x: 40, y: 18},
      {x: 40, y: 19},
      {x: 40, y: 20},
      //corner 3
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
      {x: 12, y: 40},
      {x: 13, y: 40},
      {x: 14, y: 40},
      {x: 15, y: 40},
      {x: 16, y: 40},
      {x: 17, y: 40},
      {x: 18, y: 40},
      {x: 19, y: 40},
      {x: 20, y: 40},
      //corner 4
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
      {x: 31, y: 40},
      {x: 32, y: 40},
      {x: 33, y: 40},
      {x: 34, y: 40},
      {x: 35, y: 40},
      {x: 36, y: 40},
      {x: 37, y: 40},
      {x: 38, y: 40},
      {x: 39, y: 40},
      //horizontal 1
      {x: 21, y:20},
      {x: 22, y:20},
      {x: 23, y:20},
      {x: 24, y:20},
      {x: 25, y:20},
      {x: 26, y:20},
      {x: 27, y:20},
      {x: 28, y:20},
      {x: 29, y:20},
      {x: 30, y:20},
      //horizontal 2
      {x: 21, y:31},
      {x: 22, y:31},
      {x: 23, y:31},
      {x: 24, y:31},
      {x: 25, y:31},
      {x: 26, y:31},
      {x: 27, y:31},
      {x: 28, y:31},
      {x: 29, y:31},
      {x: 30, y:31}
    ];
  } else if (difficulty === "hard") {
    obstacles = [
      //corner 1
      {x: 16, y:16},
      {x: 17, y:16},
      {x: 18, y:16},
      {x: 19, y:16},
      {x: 20, y:16},
      {x: 16, y:17},
      {x: 16, y:18},
      {x: 16, y:19},
      {x: 16, y:20},
      //corner 2
      {x: 31, y:16},
      {x: 32, y:16},
      {x: 33, y:16},
      {x: 34, y:16},
      {x: 35, y:16},
      {x: 35, y:17},
      {x: 35, y:18},
      {x: 35, y:19},
      {x: 35, y:20},
      //corner 3
      {x: 16, y:35},
      {x: 17, y:35},
      {x: 18, y:35},
      {x: 19, y:35},
      {x: 20, y:35},
      {x: 16, y:31},
      {x: 16, y:32},
      {x: 16, y:33},
      {x: 16, y:34},
      //corner 4
      {x: 31, y:35},
      {x: 32, y:35},
      {x: 33, y:35},
      {x: 34, y:35},
      {x: 35, y:35},
      {x: 35, y:31},
      {x: 35, y:32},
      {x: 35, y:33},
      {x: 35, y:34},
//corner 1
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
      {x: 11, y: 12},
      {x: 11, y: 13},
      {x: 11, y: 14},
      {x: 11, y: 15},
      {x: 11, y: 16},
      {x: 11, y: 17},
      {x: 11, y: 18},
      {x: 11, y: 19},
      {x: 11, y: 20},
      //corner 2
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
      {x: 40, y: 12},
      {x: 40, y: 13},
      {x: 40, y: 14},
      {x: 40, y: 15},
      {x: 40, y: 16},
      {x: 40, y: 17},
      {x: 40, y: 18},
      {x: 40, y: 19},
      {x: 40, y: 20},
      //corner 3
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
      {x: 12, y: 40},
      {x: 13, y: 40},
      {x: 14, y: 40},
      {x: 15, y: 40},
      {x: 16, y: 40},
      {x: 17, y: 40},
      {x: 18, y: 40},
      {x: 19, y: 40},
      {x: 20, y: 40},
      //corner 4
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
      {x: 31, y: 40},
      {x: 32, y: 40},
      {x: 33, y: 40},
      {x: 34, y: 40},
      {x: 35, y: 40},
      {x: 36, y: 40},
      {x: 37, y: 40},
      {x: 38, y: 40},
      {x: 39, y: 40},
      //corner 1
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
      {x: 11, y: 12},
      {x: 11, y: 13},
      {x: 11, y: 14},
      {x: 11, y: 15},
      {x: 11, y: 16},
      {x: 11, y: 17},
      {x: 11, y: 18},
      {x: 11, y: 19},
      {x: 11, y: 20},
      //corner 2
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
      {x: 40, y: 12},
      {x: 40, y: 13},
      {x: 40, y: 14},
      {x: 40, y: 15},
      {x: 40, y: 16},
      {x: 40, y: 17},
      {x: 40, y: 18},
      {x: 40, y: 19},
      {x: 40, y: 20},
      //corner 3
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
      {x: 12, y: 40},
      {x: 13, y: 40},
      {x: 14, y: 40},
      {x: 15, y: 40},
      {x: 16, y: 40},
      {x: 17, y: 40},
      {x: 18, y: 40},
      {x: 19, y: 40},
      {x: 20, y: 40},
      //corner 4
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
      {x: 31, y: 40},
      {x: 32, y: 40},
      {x: 33, y: 40},
      {x: 34, y: 40},
      {x: 35, y: 40},
      {x: 36, y: 40},
      {x: 37, y: 40},
      {x: 38, y: 40},
      {x: 39, y: 40},
      //horizontal 1
      {x: 21, y:23},
      {x: 22, y:23},
      {x: 23, y:23},
      {x: 24, y:23},
      {x: 25, y:23},
      {x: 26, y:23},
      {x: 27, y:23},
      {x: 28, y:23},
      {x: 29, y:23},
      {x: 30, y:23},
      //horizontal 2
      {x: 21, y:28},
      {x: 22, y:28},
      {x: 23, y:28},
      {x: 24, y:28},
      {x: 25, y:28},
      {x: 26, y:28},
      {x: 27, y:28},
      {x: 28, y:28},
      {x: 29, y:28},
      {x: 30, y:28},
      //horizontal 3
      {x: 21, y:6},
      {x: 22, y:6},
      {x: 23, y:6},
      {x: 24, y:6},
      {x: 25, y:6},
      {x: 26, y:6},
      {x: 27, y:6},
      {x: 28, y:6},
      {x: 29, y:6},
      {x: 30, y:6},
      {x: 31, y:6},
      {x: 32, y:6},
      {x: 33, y:6},
      {x: 34, y:6},
      {x: 35, y:6},
      {x: 16, y:6},
      {x: 17, y:6},
      {x: 18, y:6},
      {x: 19, y:6},
      {x: 20, y:6},
      //horizontal 4
      {x: 21, y:46},
      {x: 22, y:46},
      {x: 23, y:46},
      {x: 24, y:46},
      {x: 25, y:46},
      {x: 26, y:46},
      {x: 27, y:46},
      {x: 28, y:46},
      {x: 29, y:46},
      {x: 30, y:46},
      {x: 31, y:46},
      {x: 32, y:46},
      {x: 33, y:46},
      {x: 34, y:46},
      {x: 35, y:46},
      {x: 16, y:46},
      {x: 17, y:46},
      {x: 18, y:46},
      {x: 19, y:46},
      {x: 20, y:46},
      //vertical 1
      {x: 6, y:16},
      {x: 6, y:17},
      {x: 6, y:18},
      {x: 6, y:19},
      {x: 6, y:20},
      {x: 6, y:21},
      {x: 6, y:22},
      {x: 6, y:23},
      {x: 6, y:24},
      {x: 6, y:25},
      {x: 6, y:26},
      {x: 6, y:27},
      {x: 6, y:28},
      {x: 6, y:29},
      {x: 6, y:30},
      {x: 6, y:31},
      {x: 6, y:32},
      {x: 6, y:33},
      {x: 6, y:34},
      {x: 6, y:35},
      //vertical 2
      {x: 46, y:16},
      {x: 46, y:17},
      {x: 46, y:18},
      {x: 46, y:19},
      {x: 46, y:20},
      {x: 46, y:21},
      {x: 46, y:22},
      {x: 46, y:23},
      {x: 46, y:24},
      {x: 46, y:25},
      {x: 46, y:26},
      {x: 46, y:27},
      {x: 46, y:28},
      {x: 46, y:29},
      {x: 46, y:30},
      {x: 46, y:31},
      {x: 46, y:32},
      {x: 46, y:33},
      {x: 46, y:34},
      {x: 46, y:35},
    ];
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