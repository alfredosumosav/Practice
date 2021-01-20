/*------------------------------------------------------------------------------
// isPerfectNum
//
// A perfect number is a number that is equal to the sum of its factors (excluding itself).
// For example, the factors of 6 are 1, 2, and 3. This means 6 is a perfect number
// because 1 + 2 + 3 = 6. Write a function `isPerfectNum(num)` that returns true if
// the given `num` is perfect and false if it is not.
------------------------------------------------------------------------------*/

// Tima and Space Complexity Analysis
// O(n) time and O(1) space, where n is the value of the input number
function isPerfectNum(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
}

console.log(isPerfectNum(6)); // => true
console.log(isPerfectNum(8)); // => false
console.log(isPerfectNum(25)); // => false
console.log(isPerfectNum(28)); // => true
console.log(isPerfectNum(30)); // => false
console.log(isPerfectNum(496)); // => true