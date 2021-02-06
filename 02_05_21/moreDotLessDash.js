/***********************************************************************
Write a function `moreDotLessDash(str)` that takes in a string and
returns the true if the string contains more dots ('.') than dashes
('-'), false otherwise.
*/

// O(n) time and O(1) space
function moreDotLessDash(str) {
  // '.-.-.'
  var countDot = 0; // 3
  var countDash = 0; // 2

  for (var i = 0; i < str.length; i++) {
    // i=5 | 0,1,2,3,4
    var char = str[i];
    if (char === ".") {
      countDot += 1;
    } else if (char === "-") {
      countDash += 1;
    }
  }

  return countDot > countDash;
}

console.log(moreDotLessDash(".-.-.")); // true
console.log(moreDotLessDash("2-D arrays are fun. I think.")); // => true
console.log(moreDotLessDash(".-.-.")); // => true
console.log(moreDotLessDash(".-")); // => false
console.log(moreDotLessDash("..--")); // => false