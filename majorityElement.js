// O(n) time || O(n) space
var majorityElement = function (nums) {
  let majEle = {};
  let mostFreq = [-Infinity, null];

  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];

    if (majEle[ele] !== undefined) {
      majEle[ele]++;
    } else {
      majEle[ele] = 1;
    }

    if (majEle[ele] > mostFreq[0]) {
      mostFreq = [majEle[ele], ele];
    }
  }

  return mostFreq[1];
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([6, 5, 5]));