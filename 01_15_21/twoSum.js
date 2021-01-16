// O(n) time | O(1) space
var twoSum = function(numbers, target) {
  return binarySearchHelper(numbers, target, 0, numbers.length - 1);
};

function binarySearchHelper(numbers, target, left, right) {
  while (left <= right) {
    if (target === numbers[left] + numbers[right]) {
      return [left + 1, right + 1];
    } else if (target < numbers[left] + numbers[right]) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return [];
}

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([5, 25, 75], 100));
// console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));
