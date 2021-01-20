/*
Write a method vowel_cipher that takes in a
string and returns a new string where every vowel
becomes the next vowel in the alphabet.
*/

// console.log(vowelCipher("bootcamp")); // => buutcemp
// console.log(vowelCipher("paper cup")); // => pepir cap

function vowelCipher(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    if (alphabetVowels.indexOf(letter) > -1) {
      result += vowelsShifter(letter);
    } else {
      result += letter;
    }
  }
  return result;
}

function vowelsShifter(vowel) {
  var oldIndex = alphabetVowels.indexOf(vowel);
  var offset = 1;
  var newIndex = (oldIndex + offset) % alphabetVowels.length;
  return alphabetVowels[newIndex];
}

var alphabetVowels = "aeiou";

console.log(vowelsShifter("u"));
console.log(vowelCipher("bootcamp")); // => buutcemp
console.log(vowelCipher("paper cup")); // => pepir cap
