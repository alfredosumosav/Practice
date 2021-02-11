// O(n) time | O(1) space
function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  if (array.length === 2) return Math.max(array[0], array[1]);

  let second = array[0]; // current element - 2
  let first = Math.max(array[0], array[1]); // current element - 1
  let current; // current element

  for (let i = 2; i < array.length; i++) {
    // the maximum between last maxSum (i - 1) and last last maxSum (i - 2)
    current = Math.max(second + array[i], first);
    // update last last maxSum (i - 2) to be last maxSum (i - 1)
    second = first;
    // update last maxSum to be current maxSum
    first = current;
  }
  // return the maxSum of array
  return current;
}

console.log(maxSubsetSumNoAdjacent([1, 2, 3, 1]));
console.log(maxSubsetSumNoAdjacent([2, 7, 1, 3, 2, 2]));
