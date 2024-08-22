import { adjList, toIndex, isValid, boardSize } from "./board.js";

function bfs(start) {
  let queue = [];
  queue.push(start);
  let visited = new Array(adjList.length).fill(false);
  visited[start] = true;
  let prev = new Array(adjList.length).fill(null);

  while (queue.length > 0) {
    let node = queue.shift();
    let neighbours = adjList[node];

    neighbours.forEach((neighbour) => {
      if (!visited[neighbour]) {
        queue.push(neighbour);
        visited[neighbour] = true;
        prev[neighbour] = node;
      }
    });
  }
  return prev;
}

function reconstructPath(start, end, prev) {
  let path = [];
  for (let at = end; at != null; at = prev[at]) {
    path.push(at);
  }
  path.reverse();

  if (path[0] === start) {
    return path;
  } else {
    return [];
  }
}

function search(start, end) {
  let startIndex = toIndex(start[0], start[1]);
  let endIndex = toIndex(end[0], end[1]);
  if (!isValid(start[0], start[1]) || !isValid(end[0], end[1])) {
    throw new Error("out of bound coordinates provided");
  }
  let prev = bfs(startIndex);
  return reconstructPath(startIndex, endIndex, prev);
}

function toCoordinates(index) {
  let x = Math.floor(index / boardSize);
  let y = index % boardSize;
  return [x, y];
}

function knightMoves(start, end) {
    let path = search(start, end);

    if (path.length === 0) {
      console.log("No valid path found.");
      return;
    }
  
    console.log(`You can make it in ${path.length - 1} moves. Here's your path:`);
  
    path.forEach(index => {
      console.log(toCoordinates(index));
    });

    return '';

}

export { knightMoves };
