// O(n) time || O(n) space
var missingNumber = function (nums) {
  let ans;
  let newNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < newNums.length; i++) {
    ans = i;
    let ele = newNums[i];
    if (ele !== i) {
      ans = i;
      return ans;
    }
  }

  return ans + 1;
};