export let pointPosition = { x: 0, y: 0 }

export function generatePointBox () {
  pointPosition = { 
    x: Math.floor(Math.random() * 51) + 1,
    y: Math.floor(Math.random() * 51) + 1
  }
}

export function drawPointBoxOn (gameBoard) {
  const pointBox = document.createElement("div");
  pointBox.style.gridColumnStart = pointPosition.x;
  pointBox.style.gridRowStart = pointPosition.y;
  pointBox.classList.add("point");
  gameBoard.appendChild(pointBox);
}