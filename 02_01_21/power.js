/*
Write a recursive function `power(base, exp)` that takes in two numbers,
a base and exponent. The function should return `base` raised to `exp`
power.
*/

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}

console.log(power(2, 5)); // => 32
console.log(power(2, 10)); // => 1024
console.log(power(9, 2)); // => 81
console.log(power(9, 3)); // => 729
console.log(power(11, 0)); // => 1
console.log(power(11, 1)); // => 11