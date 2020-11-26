var floodFill = function (image, sr, sc, newColor) {
  // 4-directional directions to connected pixels
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [[sr, sc]];
  let visited = new Set(`${sr}-${sc}`);

  while (queue.length !== 0) {
    const oldPos = queue.pop(); // current pixel position
    const oldColor = image[oldPos[0]][oldPos[1]]; // current pixel color
    image[oldPos[0]][oldPos[1]] = newColor; // change color of current pixel
    // for every direction find a new position and, if it is valid, push it to 
    // the queue and remember that it was visited.
    for (let i = 0; i < directions.length; i++) {
      const newRow = oldPos[0] + directions[i][0];
      const newCol = oldPos[1] + directions[i][1];
      if (isValid(image, newRow, newCol, visited, oldColor)) {
        visited.add(`${newRow}-${newCol}`);
        queue.push([newRow, newCol]);
      }
    }
  }
  return image;
};

function isValid(image, newRow, newCol, visited, oldColor) {
  // A pixel is valid IF it is not visited, it's the same color as parent pixel
  // and it is between the boundaries of the image.
  if (
    !visited.has(`${newRow}-${newCol}`) && 
    newRow >= 0 &&
    newCol >= 0 &&
    newRow < image.length &&
    newCol < image[0].length &&
    image[newRow][newCol] === oldColor
  )
    return true;
  return false;
}
