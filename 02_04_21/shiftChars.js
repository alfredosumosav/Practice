/*
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.
*/

// O(n) time and O(n) space where n is the number of characters of the word
function shiftChars(word, num) {
  let ans = "";

  for (var i = 0; i < word.length; i++) {
    const char = word[i];
    const oldIndex = alphabet.indexOf(char);
    const newIndex = oldIndex + num;
    ans += alphabet[newIndex % alphabet.length];
  }

  return ans;
}

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

console.log(shiftChars("able", 1)); // => 'bcmf'
console.log(shiftChars("apple", 2)); //=> 'crrng'
console.log(shiftChars("bootcamp", 3)); //=> 'errwfdps'
console.log(shiftChars("zebra", 5)); //=> 'ejgwf'