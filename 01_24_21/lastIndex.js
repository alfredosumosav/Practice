/*
Last Index
Write a function lastIndex(string, char) that takes in a string and a character.
The method should return the last index where the
character can be found in the string.
*/

function lastIndex(str, char) {
  var lastI = null;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (char === letter) {
      lastI = i;
    }
  }
  return lastI;
}

console.log(lastIndex("abca", "a")); // => 3
console.log(lastIndex("mississipi", "i")); // => 9
console.log(lastIndex("octagon", "o")); // => 5
console.log(lastIndex("programming", "m")); // => 7