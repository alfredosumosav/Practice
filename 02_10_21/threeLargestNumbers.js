// O(n) time | O(1) space
function findThreeLargestNumbers(array) {
  let largest = [-Infinity, -Infinity, -Infinity];
  for (const num of array) {
    update(largest, num);
  }
  return largest;
}

function update(largest, num) {
  let temp;
  let i = largest.length - 1;
  while (i >= 0) {
    if (num >= largest[i]) {
      temp = largest[i];
      largest[i] = num;
      num = temp;
    }
    i--;
  }
  return largest;
}
