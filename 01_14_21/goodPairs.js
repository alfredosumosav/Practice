/*
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Input: nums = [1,2,3]
Output: 0
*/
var numIdenticalPairs = function (nums) {
  let goodPairs = 0;
  let h = {};
  for (let i = 0; i < nums.length; i++) {
    if (h[nums[i]] !== undefined) {
      h[nums[i]] += 1;
    } else {
      h[nums[i]] = 1;
    }
  }

  for (k in h) {
    if (h[k] > 1) {
      // add count
      const pairs = Math.floor((h[k] * (h[k] - 1)) / 2);
      goodPairs += pairs;
    }
  }

  return goodPairs;
};
