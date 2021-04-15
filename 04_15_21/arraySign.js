// https://leetcode.com/problems/sign-of-the-product-of-an-array

// O(n) time and O(1) space
var arraySign = function (nums) {
  nums.forEach((num, i) => num < 0 ? nums[i] = -1 : num > 0 ? nums[i] = 1 : nums[i] = 0);
  if (nums.some(num => num === 0)) return 0;
  return nums.reduce((acc, num) => acc * num);
};