// https://leetcode.com/problems/sort-colors/

// O(n) time and O(1) space, where n is the number of elements in the input array
var sortColors = function (nums) {
  // counters for each color.
  let red = 0;
  let white = 0;
  let blue = 0;

  // count how many reds, whites and blues are.
  nums.forEach(num => num === 0 ? red++ : num === 1 ? white++ : blue++);

  // modify the array in-place, placing the values in order (first 0s, then 1s and 2s)
  for (let i = 0; i < nums.length; i++) {
    if (red) {
      nums[i] = 0;
      red--;
      continue;
    }

    if (white) {
      nums[i] = 1;
      white--;
      continue;
    }

    if (blue) {
      nums[i] = 2;
      blue--;
      continue;
    }
  }
  
  return nums;
}

console.log(sortColors([0])); // [0]
console.log(sortColors([1])); // [1]
console.log(sortColors([2,0,1])); // [0,1,2]
console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]

/*
0 red
1 white
2 blue
*/