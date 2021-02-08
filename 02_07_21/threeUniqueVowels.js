/*
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.
*/

/*
strategy
return true or false; check for three or more unique vowels then retur true; return false otherwise
*/

// O(n) time and O(1) space where n is the number of characters of the input string
function threeUniqueVowels(string) {
  // 'delicious'
  var vowels = "aeiou";
  var count = 0; // 4

  for (var i = 0; i < vowels.length; i++) {
    // i=5 | 0,1,2,3,4
    var vowel = vowels[i]; // u
    if (string.indexOf(vowel) > -1) {
      count += 1;
    }
  }

  return count >= 3; // true
}

console.log(threeUniqueVowels("delicious")); // true
console.log(threeUniqueVowels("bootcamp prep")); // => true
console.log(threeUniqueVowels("bootcamp")); // => false
console.log(threeUniqueVowels("dog")); // => false
console.log(threeUniqueVowels("go home")); // => false