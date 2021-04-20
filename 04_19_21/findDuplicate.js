var findDuplicate = function(nums) {
  let seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return num;

    // guardalo
    seen.add(num);
  }
}

// console.log(findDuplicate([1,1])); // 1
// console.log(findDuplicate([1,1,2])); // 1
// console.log(findDuplicate([3,1,3,4,2])); // 3
// console.log(findDuplicate([1, 3, 4, 2, 2])); // 2