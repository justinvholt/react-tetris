/*  
  Instead of dominos, you have tetrominos! In order to design the shape of
  a tetromino, it needs to be established in a multidimensional array that
  is also a square grid (3x3, 4x4). Any negative space (tile) needs to be
  established as an empty property with a color matching the bg-color.
*/

// Presented in all caps to represent an immutable value
export const TETROMINOS = {
  // A list of tetrominos and their shape

  // First, establish the empty tile in an object
  0: { shape: [[0]], color: '0, 0, 0' },
  // Now give each object its shape creating a multidimensional array
  I: {
       shape: [
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0]
              ],
       color: '80, 227, 230',
  },
  J: {
    shape: [
             [0, 'J', 0],
             [0, 'J', 0],
             ['J', 'J', 0]
           ],
    color: '36, 95, 223',
  },
  L: {
    shape: [
             [0, 'L', 0],
             [0, 'L', 0],
             [0, 'L', 'L']
           ],
    color: '223, 173, 36',
  },
  O: {
    shape: [
             ['O', 'O'],
             ['O', 'O']
           ],
    color: '223, 217, 36',
  },
  S: {
    shape: [
             [0, 'S', 'S'],
             ['S', 'S', 0],
             [0, 0, 0]
           ],
    color: '48, 211, 56',
  },
  T: {
    shape: [
             [0, 'T', 0],
             ['T', 'T', 'T'],
             [0, 0, 0]
           ],
    color: '132, 61, 198',
  },
  U: {
    shape: [
             ['U', 0, 'U'],
             ['U', 'U', 'U'],
             [0, 0, 0]
           ],
    color: '255, 111, 97',
  },
  Z: {
    shape: [
             ['Z', 'Z', 0],
             [0, 'Z', 'Z'],
             [0, 0, 0]
           ],
    color: '227, 78, 78',
  }
}

// Export a loop wherein a new tetromino is randomly created 
export const randomTetromino = () => {
  const tetrominos = 'IJLOSTUZ';
  const randTetromino = 
    tetrominos[Math.floor(Math.random() * tetrominos.length)];

  return TETROMINOS[randTetromino];
};