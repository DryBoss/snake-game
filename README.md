# 🐍 Snake Game

A classic Snake game built with vanilla HTML, CSS, and JavaScript — playable on a 51×51 grid with three selectable difficulty levels, obstacle mazes, pause/resume, and a persistent high score.

## 🎮 How to Play

- **Move**: Arrow keys or `W` `A` `S` `D`
- **Pause / Resume / Restart**: `Space`, or the on-screen play/pause button
- On-screen directional buttons are also available for mouse/touch play
- Eat the point boxes to grow the snake and increase your score
- Avoid running into the walls, your own tail, or (on Medium/Hard) the obstacle maze
- Your high score is saved locally in the browser and persists between sessions

## 🕹️ Difficulty Levels

| Difficulty | Points per food | Obstacles |
|---|---|---|
| Pussy (Easy) | 1 | None |
| Normie (Medium) | 2 | Corner boxes + 2 horizontal walls |
| Edgy (Hard) | 4 | Corner boxes, horizontal & vertical walls (denser maze) |

Switching difficulty mid-game restarts the snake and regenerates the board's obstacles.

## 🗂️ Project Structure

```
snake-game/
├── index.html              # Page markup: game board, controls, difficulty & death menu
├── images/
│   └── snake-game-favicon.png
├── scss/
│   └── main.scss           # Source Sass for styling
└── main/
    ├── css/
    │   └── main.css         # Compiled stylesheet
    └── js/
        ├── main.js          # Game loop / render orchestration
        ├── control.js       # Input handling, difficulty switching, pause/resume state
        ├── snake.js          # Snake body movement, collision detection, scoring, death menu
        ├── point.js          # Food (point box) placement logic
        └── obstacle.js       # Obstacle layouts per difficulty
```

## ⚙️ How It Works (Under the Hood)

- The board is a CSS grid; the snake, food, and obstacles are all positioned via `gridColumnStart` / `gridRowStart` on a 51×51 coordinate space.
- `main.js` runs a `setInterval` game loop (10 ticks/sec) that re-renders the snake, food, and obstacles each tick based on the current game state.
- `control.js` owns direction/difficulty state and wires up keyboard, click, and on-screen button input.
- `snake.js` advances the snake's body array each tick, checks for food/self/wall/obstacle collisions, updates the score, and stores the high score in `localStorage`.
- `point.js` randomly places the next food box, avoiding the snake's body and any active obstacles.
- `obstacle.js` defines the fixed obstacle coordinate sets used for Medium and Hard difficulty.

## 🚀 Running Locally

This is a static site with no build step or external dependencies (beyond a Google Font).

Because `main.js` is loaded as an ES module (`type="module"`), open it via a local server rather than directly from the filesystem:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the printed URL (e.g. `http://localhost:8000`) in your browser.

If you'd rather work from the Sass source, compile `scss/main.scss` to `main/css/main.css` with your Sass compiler of choice, e.g.:

```bash
npx sass scss/main.scss main/css/main.css
```

## 🛠️ Tech Stack

- Vanilla HTML, CSS (Sass), and JavaScript (ES modules)
- No frameworks or build tools required to run
- Google Fonts (`Press Start 2P`) for the retro pixel look
- `localStorage` for persisting the high score

## ✏️ Customizing

- **Board size**: The 1–51 grid bounds are checked in `snake.js`'s collision logic — update those bounds (and the CSS grid definition) together if you resize the board.
- **Speed**: Adjust `snakeSpeed` in `main.js` (higher = faster).
- **Obstacles**: Edit the coordinate arrays in `obstacle.js` to design new mazes per difficulty.
- **Scoring**: Change the per-difficulty point values in `snake.js`.
- **Styling**: Edit `scss/main.scss` and recompile, or edit `main/css/main.css` directly.

## 💬 Feedback

Feedback and suggestions are welcome — feel free to open an issue or reach out to [DryBoss](https://github.com/DryBoss) on GitHub.
