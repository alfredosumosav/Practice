function getPermutations(string) {
  
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  // Recursive case: get all permutations for all the characters, except the last
}

console.log(getPermutations('cats'));