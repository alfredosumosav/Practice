// O(nlog(n)) time || O(n) space
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


// Using Gauss' Formula ∑i = (n*(n + 1)) / 2
// O(n) time || O(1) space
var missingNumber = function (nums) {
  const expectedSum = (nums.length * (nums.length + 1)) / 2;
  const actualSum = nums.reduce((acc, currentValue) => acc + currentValue);
  return expectedSum - actualSum;
};