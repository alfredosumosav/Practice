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