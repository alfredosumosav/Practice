/*
Write a method that takes in a string and returns
the number of times that the same letter repeats twice in a row.
*/

// Time and Space complexity Analysis
// O(n * m) time and O(n) space where n is the # of words in the string and m 
// is the # of characters in a word
function doubleLetterCount(str) {
  var count = 0;
  var arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    count += doubleCounter(word);
  }

  return count;
}

function doubleCounter(word) {
  var count = 0;
  var bool = true;

  for (var i = 1; i < word.length; i++) {
    var current = word[i];
    var prev = word[i - 1];
    var next = word[i + 1];
    if (current === prev && current === next) {
      bool = false;
      continue;
    } else if (current === prev && current !== next && bool === false) {
      continue;
    } else if (current === prev && current !== next && bool === true) {
      count += 1;
    }
    bool = true;
  }

  return count;
}

console.log(doubleCounter("jeep")); // => 1
console.log(doubleLetterCount("the jeep rolled down the hill")); // 3
console.log(doubleLetterCount("bootcamp")); // 1