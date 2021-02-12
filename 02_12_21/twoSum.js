// https://www.algoexpert.io/questions/Two%20Number%20Sum

// TODO: improve time and space complexity
// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let a = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let b = array[j];
      if (a + b === targetSum) {
        return [a, b];
      }
    }
  }
  return [];
}