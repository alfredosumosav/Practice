/*
uniqueCharsInWords

Write a function `uniqueCharsInWords(sentence)` that takes in a sentence and
returns true if every word contains only unique characters and returns false
otherwise. The same character can appear across different words, but within a
single word no character should appear more than once.
*/

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