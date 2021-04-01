// https://leetcode.com/problems/move-zeroes/

// Time and space complexity analysis
// O(n) time and O(1) space, where n is the size of the input array
var moveZeroes = function (nums) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    const NUM = nums[i];
    const isZero = NUM === 0;
    const isStart = i === start;

    if (!isZero && !isStart) {
      nums[start] = NUM;
      nums[i] = 0;
      start += 1;
    } else if (!isZero && isStart) {
      start++;
    }
  }
  return nums;  
};