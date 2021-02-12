function searchInSortedMatrix(matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;
  while (matrix[i][j] !== undefined) {
    let point = matrix[i][j];
    if (point === target) return [i, j];
    if (point > target) {
      j--;
    } else if (point < target) {
      i++;
    }
  }

  return [-1, -1];
}