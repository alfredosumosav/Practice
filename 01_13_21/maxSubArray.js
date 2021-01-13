// Time & Space Complexity
  // O(n) time and O(1) space
var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], nums[i] + currentMax);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  return globalMax;
};
