let boardSize = 8;

let adjList = Array.from({ length: boardSize * boardSize }, () => []);

let knightMoves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

function toIndex(x, y) {
  return x * boardSize + y;
}

function isValid(x, y) {
  return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}

for (let x = 0; x < boardSize; x++) {
  for (let y = 0; y < boardSize; y++) {
    let currentIndex = toIndex(x, y);
    for (let move of knightMoves) {
      let newX = x + move[0];
      let newY = y + move[1];
      if (isValid(newX, newY)) {
        let newIndex = toIndex(newX, newY);
        adjList[currentIndex].push(newIndex);
      }
    }
  }
}

export default adjList;
