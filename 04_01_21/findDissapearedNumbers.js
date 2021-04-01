// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/* Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all the integers in the range [1, n] that do not appear in nums.
*/

// Time and space complexity analysis
// O(n) time and O(n) space, where n is the size of the input array
var findDisappearedNumbers = function (nums) {
  let numbersPresent = new Array(nums.length + 1).fill(false);
  let missingNumbers = [];

  // for every value in nums, set the equivalent index in numbersPresent to true
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    numbersPresent[num] = true;
  }

  // for every index in numbersPresent, if it is not present. store the index in
  // missingNumbers
  for (let j = 1; j < numbersPresent.length; j++) {
    if (numbersPresent[j] === false) {
      missingNumbers.push(j);
    }
  }

  return missingNumbers;
};

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums1)); // [5,6]

const nums2 = [1, 1];
console.log(findDisappearedNumbers(nums2)); // [2]