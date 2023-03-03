//game variables
export let snakeDirection = "right";

//change snake direction according pressed keys
window.addEventListener("keydown", event => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      if (snakeDirection !== "down") {
        snakeDirection = "up";
      }
      break;
    case "ArrowLeft":
    case "a":
      if (snakeDirection !== "right") {
        snakeDirection = "left";
      }
      break;
    case "ArrowRight":
    case "d":
      if (snakeDirection !== "left") {
        snakeDirection = "right";
      }
      break;
    case "ArrowDown":
    case "s":
      if (snakeDirection !== "up") {
        snakeDirection = "down";
      }
      break;
  }
})
