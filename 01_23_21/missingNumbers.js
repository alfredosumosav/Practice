/*
Missing Numbers
Given an array of unique integers ordered from least to greatest,
write a function that determines which integers are still needed to
fill in the consecutive set.
*/

function missingNumbers(array) {
  var ans = [];
  for (var i = array[0]; i <= array[array.length - 1]; i++) {
    if (array.indexOf(i) === -1) {
      ans.push(i);
    }
  }
  return ans;
}

// console.log(missingNumbers([1, 3]));
// console.log(missingNumbers([2, 3, 7]));
// console.log(missingNumbers([-5, -1, 0, 3]));