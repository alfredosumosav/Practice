/***********************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the
greatest common factor between num1 and num2. This means that the
function should return the largest number that divides both num1 and
num2.

Examples:

greatestCommonFactor(6, 10); // => 2
greatestCommonFactor(10, 15); // => 5
greatestCommonFactor(4, 7); // => 1
greatestCommonFactor(4, 8); // => 4
greatestCommonFactor(45, 30); // => 15
***********************************************************************/

// O(n) time and O(1) space, where n is the value of the biggest number
function greatestCommonFactor(num1, num2) {
  for (var i = num1; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

console.log(greatestCommonFactor(6, 10)); // 2
console.log(greatestCommonFactor(10, 15)); // 5
console.log(greatestCommonFactor(4, 7)); // 1
console.log(greatestCommonFactor(4, 8)); // 4
console.log(greatestCommonFactor(45, 30)); // 15