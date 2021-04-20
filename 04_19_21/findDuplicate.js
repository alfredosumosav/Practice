// https://leetcode.com/problems/find-the-duplicate-number

// O(n) time and O(n) space
var findDuplicate = function(nums) {
  // create a seen set
  let seen = new Set();

  // traverse the nums array...
  for (const num of nums) {
    // ... if has been seen before, this is my duplicate.
    if (seen.has(num)) return num;

    // ... otherwise, has not been seen before, so remember it.
    seen.add(num);
  }
}

// console.log(findDuplicate([1,1])); // 1
// console.log(findDuplicate([1,1,2])); // 1
// console.log(findDuplicate([3,1,3,4,2])); // 3
// console.log(findDuplicate([1, 3, 4, 2, 2])); // 2