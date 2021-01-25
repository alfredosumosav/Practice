/*
Write a method consonant_cancel that takes in a sentence
and returns a new sentence where every word begins with it's first vowel.
*/

function consonantCancel(sentence) {
  var result = [];
  var arr = sentence.split(" ");

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var wordArr = word.split("");

    for (var j = 0; j < word.length; j++) {
      var char = word[j];
      if (isVowel(char)) {
        result.push(word.slice(j));
        break;
      }
    }
  }

  return result.join(" ");
}

function isVowel(char) {
  return vowels.includes(char);
}

var vowels = "aeiou";

console.log(consonantCancel("down the rabbit hole"));
console.log(consonantCancel("writting code is challenging"));
