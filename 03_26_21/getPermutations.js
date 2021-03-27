/*
Write a recursive function for generating all permutations of an input string. 
Return them as a set.

Don't worry about time or space complexity—if we wanted efficiency we'd write an 
iterative version.

To start, assume every character in the input string is unique.

Your function can have loops—it just needs to also be recursive.

 input: cats
output: stac
        tsac
        tasc
        tacs
        satc
        astc
        atsc
        atcs
        sact
        asct
        acst
        acts
        stca
        tsca
        tcsa
        tcas
        scta
        csta
        ctsa
        ctas
        scat
        csat
        cast
        cats 
*/

// Time and space complexity analysis
// O(n*n!) time and O(n!) space, where n is the size of the string input
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