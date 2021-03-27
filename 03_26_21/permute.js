// https://leetcode.com/problems/permutations/

/*
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:

  1 <= nums.length <= 6
  -10 <= nums[i] <= 10
  All the integers of nums are unique.
*/

// Time and space complexity analysis
// O(n*n!) time and O(n!) space, where n is the size of the array input
var permute = function (nums) {
  // Base case
  if (nums.length <= 1) {
    return [nums];
  }

  const allNumsExceptLast = nums.slice(0, -1);
  const lastNum = nums[nums.length - 1];

  // Recursive case: get all permutations for all the numbers, except the last
  const permutationsOfAllNumsExceptLast = permute(allNumsExceptLast);

  // put the last num in all possible positions for each of the above permutations
  const permutations = [];
  permutationsOfAllNumsExceptLast.forEach((permutationOfAllNumsExceptLast) => {
    for (let position = 0; position <= allNumsExceptLast.length; position++) {
      let permutation =
        permutationOfAllNumsExceptLast.slice(0, position) +
        lastNum +
        permutationOfAllNumsExceptLast.slice(position);
      permutations.push(permutation);
    }
  });

  return permutations;
};
