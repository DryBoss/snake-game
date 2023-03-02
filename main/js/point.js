export function drawPointBoxOn (gameBoard) {
  const pointBox = document.createElement("div");
  pointBox.style.gridColumnStart = bodyPart.x;
  pointBox.style.gridRowStart = bodyPart.y;
  pointBox.classList.add("snake-body-part");
  gameBoard.appendChild(pointBox);
}