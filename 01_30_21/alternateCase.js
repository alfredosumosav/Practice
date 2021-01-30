/***********************************************************************
Write a function alternateCase(str) that takes in a word and returns the
word where the characters alternate between uppercase and lowercase.
***********************************************************************/
// O(n) time and O(n) space
function alternateCase(str) {
  var newStr = "";

  for (var i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('hello')); // => 'HeLlO'