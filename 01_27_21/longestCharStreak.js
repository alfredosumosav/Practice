/*
Write a function `longestCharStreak(string)` that takes in a string and returns a string
representing the longest streak of the single character repeated consecutively. If
there are ties, return the streak that appears later in the string.
*/

function longestCharStreak(str) {
  var longestStreak = "";
  var currentStreak = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var nextChar = str[i + 1];
    if (nextChar !== char) {
      currentStreak += char;
      if (longestStreak.length <= currentStreak.length) {
        longestStreak = currentStreak;
      }
      currentStreak = "";
    } else {
      currentStreak += char;
    }
  }

  return longestStreak;
}

console.log(longestCharStreak("a")); // => 'a'
console.log(longestCharStreak("accccbbb")); // => 'cccc'
console.log(longestCharStreak("aaaxyyyyyzz")); // => 'yyyyy
console.log(longestCharStreak("aaabbb")); // => 'bbb'
console.log(longestCharStreak("abc")); // => 'c'