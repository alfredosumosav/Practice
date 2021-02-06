/*
Write a function `uncompressString(str)` that takes in a "compressed"
string and returns the "uncompressed" version of the string. In the
input `str`, every letter is followed by a single digit number that
specifies how many times that character is repeated.
*/

// O(n) time and O(n) space where n is the # of character of the inpupt string
function uncompressString(str) {
  var ans = "";

  for (var i = 0; i < str.length; i += 2) {
    var char = str[i];
    var repeat = Number(str[i + 1]);

    for (var j = 0; j < repeat; j++) {
      ans += char;
    }
  }

  return ans;
}

console.log(uncompressString("a2b4c1")); // => 'aabbbbc'
console.log(uncompressString("b1o2t1")); // => 'boot'
console.log(uncompressString("x3y1x2z4")); // => 'xxxyxxzzzz'