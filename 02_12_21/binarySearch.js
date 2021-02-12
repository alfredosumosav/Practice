// https://www.algoexpert.io/questions/Binary%20Search

// O(log(n)) time | O(1) space
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else if (target > array[mid]) {
      left = mid + 1;
    }
  }

  return -1;
}