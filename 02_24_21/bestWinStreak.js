/*
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.
*/

function bestWinStreak(str) {
  var longestStreak = "";
  var currentStreak = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var next = str[i + 1];
    if (next !== char) {
      currentStreak += char;
      if (currentStreak.indexOf("L") === -1) {
        if (longestStreak.length < currentStreak.length) {
          longestStreak = currentStreak;
        }
      }
      currentStreak = "";
    } else {
      currentStreak += char;
    }
  }

  return longestStreak.length;
}

console.log(bestWinStreak("WWLWWWLWW")); // => 3
console.log(bestWinStreak("WWLLWWWWW")); // => 5
console.log(bestWinStreak("WWWW")); // => 4
console.log(bestWinStreak("LLL")); // => 0