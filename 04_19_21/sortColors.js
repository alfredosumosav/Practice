// https://leetcode.com/problems/sort-colors/

// O(n) time and O(1) space, where n is the number of elements in the input array
var sortColors = function (nums) {
  // counters for each color.
  const color = ["", null]; // color
  const colors = {
    red: 0,
    white: 0,
    blue: 0
  }

  // count how many reds, whites and blues are.
  nums.forEach(num => num === 0 ? colors.red++ : num === 1 ? colors.white++ : colors.blue++);

  // modify the array in-place, placing the values in order (first 0s, then 1s and 2s)
  for (let i = 0; i < nums.length; i++) {
    
    // what is the next color?
    colors.red ? [color[0], color[1]] = ["red", 0] : 
    colors.white ? [color[0], color[1]] = ["white", 1] : 
    [color[0], color[1]] = ["blue", 2];
    
    // change the current value to the integer representing the next color.
    nums[i] = color[1];

    // decrease the color counter by 1.
    colors[color[0]]--;
  }
  
  return nums;
}

// console.log(sortColors([0])); // [0]
// console.log(sortColors([1])); // [1]
// console.log(sortColors([2,0,1])); // [0,1,2]
// console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]

/*
0 red
1 white
2 blue
*/