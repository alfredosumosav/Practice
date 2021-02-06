/*
Write a function fibonacci(n) that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.
*/

// O(n) time and O(n) space where n is the size of the fibonacci sequence asked
function fibonacci(n) {
  var ans = [];
  if (n < 3) {
    for (var i = 0; i < n; i++) {
      ans.push(1);
    }
  } else {
    ans = [1, 1];
    var num1 = 1;
    var num2 = 1;

    for (var j = 0; j < n - 2; j++) {
      var num3 = num1 + num2;
      ans.push(num3);
      num1 = num2;
      num2 = num3;
    }
  }
  return ans;
}

console.log(fibonacci(0)); // => []
console.log(fibonacci(1)); // => [ 1 ]
console.log(fibonacci(2)); // => [ 1, 1 ]
console.log(fibonacci(3)); // => [ 1, 1, 2 ]
console.log(fibonacci(5)); // => [ 1, 1, 2, 3, 5 ]
console.log(fibonacci(10)); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]