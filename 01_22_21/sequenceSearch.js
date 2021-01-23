/*
Sequence Search
You are given two strings, a sequence and a key. Write a function that
determines if the characters of the key appear in order (although not
neccesarily contiguously) in the sequence.

EXAMPLES:

sequenceSearch('arcata', 'cat'); // => true
sequenceSearch('c1a2t3', 'cat'); // => true
sequenceSearch('cta', 'cat'); // => false
sequenceSearch('caat', 'cat'); // => true

Constraint:
You may not use Regular Expressions (RegExp) in your solution.
*/

function sequenceSearch(sequence, key) {
  var ans = "";
  var searchChar = key[0];
  var start = 0;

  for (var i = 0; i < key.length; i++) {
    var char = key[i];

    for (var j = start; j < sequence.length; j++) {
      var letter = sequence[j];

      if (letter === char && i === key.length - 1) {
        return true;
      } else if (letter === char) {
        start = j + 1;
        break;
      }
    }
  }

  return false;
}

// console.log(sequenceSearch('arcata', 'cat'));
// console.log(sequenceSearch('c1a2t3', 'cat')); // => true
// console.log(sequenceSearch('cta', 'cat')); // => false
// console.log(sequenceSearch('caat', 'cat')); // => true
