/*
Write an efficient function that checks whether any permutation ↴ of an input 
string is a palindrome.

You can assume the input string only contains lowercase letters.

Examples:

  "civic" should return true
  "ivicc" should return true
  "civil" should return false
  "livci" should return false
*/

// Time and space complexity
// O(n) time, where n is the the size of the string input
// O(k) space, where k is the number of unique characters (ASCII: 128, Unicode: 100.000)
function hasPalindromePermutation(theString) {

  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}