/*
Write a function fib() that takes an integer n and returns the nth 
Fibonacci number.

Let's say our Fibonacci series is 0-indexed and starts with 0. So:

  fib(0);  // => 0
  fib(1);  // => 1
  fib(2);  // => 1
  fib(3);  // => 2
  fib(4);  // => 3
  ...
*/

// Time and space complexity analysis
// O(n) time and O(1) space, where n is the nth Fibonacci number
function fib(n) {
  // Edge cases:
  if (n < 0) {
    throw new Error(
      "Index was negative. No such thing as a negative index in a series."
    );
  } else if (n === 0 || n === 1) {
    return n;
  }

  // We'll be building the fibonacci series from the bottom up
  // So we'll need to track the previous 2 numbers at each step
  let prevPrev = 0; // 0th fibonacci
  let prev = 1; // 1st fibonacci
  let current; // Declare current

  for (let i = 1; i < n; i++) {
    // Iteration 1: current = 2nd fibonacci
    // Iteration 2: current = 3rd fibonacci
    // Iteration 3: current = 4th fibonacci
    // To get nth fibonacci ... do n-1 iterations.
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

console.log(fib(5)); // 5