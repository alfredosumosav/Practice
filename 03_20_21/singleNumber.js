// https://leetcode.com/problems/single-number/submissions/

// Time and space complexity analysis
// O(n) time
// O(1) space, where n is size of the input array
var singleNumber = function (nums) {
  let numbersAlreadySeen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    numbersAlreadySeen.has(num) ? numbersAlreadySeen.delete(num) : numbersAlreadySeen.add(num);
  }
  
  return numbersAlreadySeen.values().next().value;
};

let arr1 = [2, 2, 1];
let arr2 = [4, 1, 2, 1, 2];
let arr3 = [1];

console.log(singleNumber(arr1));
console.log(singleNumber(arr2));
console.log(singleNumber(arr3));