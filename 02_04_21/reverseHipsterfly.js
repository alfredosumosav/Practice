/*
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.
*/
// O(c * w) time and O(c * w) where c is the # of characters and w is the number 
// of words in the sentence
function reverseHipsterfy(sentence) {
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = removeFirstVowels(words[i]);
  }

  return words.join(" ");
}

function removeFirstVowels(str) {
  let ans = "";
  let lastVowel = "";

  for (var i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (lastVowel === "" && vowels.indexOf(char) > -1) {
      lastVowel = char;
      ans = char + ans;
    } else if (vowels.indexOf(char) === -1) {
      ans = char + ans;
    }
  }

  return ans;
}

const vowels = "aeiou";

console.log(reverseHipsterfy("proper")); // => 'prper'
console.log(reverseHipsterfy("proper tonic panther")); // => 'prper tnic pnther'
console.log(reverseHipsterfy("towel flicker banana")); // => 'twel flcker bnna'
console.log(reverseHipsterfy("try runner anaconda")); // => 'rnner ncnda'
console.log(reverseHipsterfy("turtle cheeseburger fries")); // => 'trtle chsbrger fres'