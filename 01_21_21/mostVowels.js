/*
Most Vowels
Write a method most_vowels that takes in a
sentence string and returns the word of the sentence
that contains the most vowels.

EXAMPLES

console.log(mostVowels("what a wonderful life"))// => 'wonderful'
*/

function mostVowels(str) {
  var vowels = "aeiou";
  var words = str.split(" ");
  var count = 0;
  var result = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (vowelsCount(word, vowels) > count) {
      result = words[i];
      count = vowelsCount(word, vowels);
    }
  }

  return result;
}

function vowelsCount(word, vowels) {
  var count = 0;

  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    if (vowels.indexOf(char) > -1) {
      count += 1;
    }
  }

  return count;
}

console.log(mostVowels("what a wonderful life")); // => 'wonderful'