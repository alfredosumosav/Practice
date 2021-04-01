var moveZeroes = function(nums) {
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