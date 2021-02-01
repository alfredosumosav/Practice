/*
Write a recursive function `factorial(n)`, that returns the factorial
of the number `n`.
*/

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(1)); // => 1
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(10)); // => 3628800