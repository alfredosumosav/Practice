/*
Write a function `repeatedChars(word) `which takes a string
and returns an array of all the characters in word that
appear in a streak (i.e. more than once consecutively).

This should be case-sensitive.
*/

function repeatedChars(word) {
  var result = [];
  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    var next = word[i + 1];
    var prev = word[i - 1];
    if (char !== next && char === prev) {
      result.push(char);
    }
  }
  return result;
}

console.log(repeatedChars("aaabaa")); // => ["a", "a"]
console.log(repeatedChars("mississippi")); // => ["s", "s", "p"]
console.log(repeatedChars("SSassSS")); // => ["S", "s", "S"]
