export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that it's an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that next move is inside grid's height (y)
          // (Also cannot go through bottom of grid)
          !stage[y + player.pos.y + moveY] || 
          // 3. Check that next move is inside the grid's width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check next cell isn't set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
  // 5. If everything above is false
  return false;
};