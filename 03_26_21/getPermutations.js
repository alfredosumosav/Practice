function getPermutations(string) {
  
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptTheLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive case: get all permutations for all the characters, except the last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptTheLast);

  // put the last char in all possible positions for each of the above permutations
  let permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptTheLast.length; position++) {
      let permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
}

console.log(getPermutations('cats'));