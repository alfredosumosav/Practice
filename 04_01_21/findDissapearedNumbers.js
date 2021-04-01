// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/* Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all the integers in the range [1, n] that do not appear in nums.
*/

var findDisappearedNumbers = function (nums) {
  let numbers = new Array(nums.length + 1).fill(false);
  let missingNumbers = [];

  // iterar en cada numero y marcar el indice correspondiente a este valor como true en numbers
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    numbers[num] = true;
  }

  for (let j = 1; j < numbers.length; j++) {
    if (numbers[j] === false) {
      missingNumbers.push(j);
    }
  }

  return missingNumbers;
};

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums1)); // [5,6]

const nums2 = [1, 1];
console.log(findDisappearedNumbers(nums2)); // [2]