// https://leetcode.com/problems/sign-of-the-product-of-an-array

// O(n) time and O(n) space
var arraySign = function (nums) {
  const nums2 = nums.map(num => num < 0 ? -1 : num > 0 ? 1 : 0);
  if (nums2.some(num => num === 0)) return 0;
  return nums2.reduce((acc, num) => acc * num)
};