/*
uniqueCharsInWords

Write a function `uniqueCharsInWords(sentence)` that takes in a sentence and
returns true if every word contains only unique characters and returns false
otherwise. The same character can appear across different words, but within a
single word no character should appear more than once.
*/

// Time and Space Complexity Analysis
// O(n * m) time and O(n) space, where n is the number of words in a sentence
// and m is the max number of character in a word
// function uniqueCharsInWords(sentence) {
//   var words = sentence.split(" ");
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     if (!unique(word)) {
//       return false;
//     }
//   }
//   return true;
// }

// function unique(str) {
//   var seenChars = [];

//   for (var i = 0; i < str.length; i++) {
//     var char = str[i];
//     if (seenChars.indexOf(char) === -1) {
//       seenChars.push(char);
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(uniqueCharsInWords('this has repeated chars')); // => false
// console.log(uniqueCharsInWords('this has no duplicate chars')); // => true
// console.log(uniqueCharsInWords('javascript is fun')); // => false
// console.log(uniqueCharsInWords('coding is fun')); // => true

var uniqueCharsinWord = function (sentence) {
  let alpha = "abcdefghijklmnopqrstvwxyz".split("");
  let alphaHash = {};
  
  // build an alphabet hash table
  for (let c of alpha) {
    alphaHash[c] = 0;
  }

  // rompe la oracion
  let sentenceArr = sentence.split(" ");

  for (let i = 0; i < sentenceArr.length; i++) {
    let ele = sentenceArr[i];
    let seen = new Set();

    for (let j = 0; j < ele.length; j++) {
      let c = ele[j];

      if (seen.has(c)) {
        return false;
      } else {
        seen.add(c);
      }
    }
  }

  return true;
};

console.log(uniqueCharsinWord("this has repeated chars")); // false
console.log(uniqueCharsinWord("this has no duplicate chars"));
console.log(uniqueCharsinWord("javascript is fun"));
console.log(uniqueCharsinWord("coding is fun"));