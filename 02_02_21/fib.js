/*
Write a function fib(n) that takes in a number and returns the nth number
of the fibonacci sequence.

In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1.
To generate the next number in the sequence, we take the sum of the
previous two fibonacci numbers. For example the first 5 numbers of the
fibonacci sequence are `1, 1, 2, 3, 5`
*/

function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  var answer = fib(n - 1) + fib(n - 2);
  return answer;
}

console.log(fib(1)) // => 1
console.log(fib(2)) // => 1
console.log(fib(3)) // => 2
console.log(fib(4)) // => 3
console.log(fib(5)) // => 5
console.log(fib(6)) // => 8
console.log(fib(7)) // => 13