// https://leetcode.com/problems/happy-number/submissions/

var isHappy = function (n) {
  const squaredDigitsSum = new Set(); // a set containing the sum of the squared digits of a number.
  let runningSum = 0; // the sum of the squared digits of a number.

  // get the sum of the squared digits of a number.
  while (n > 0) {
    const remainder = n % 10; // grab the last digit of a number.
    n = Math.floor(n / 10); // reduce the number by 1 digit.
    runningSum = runningSum + (remainder ** 2); // square the remainder and add it to the running sum.

    // if we finished decomposing the number...
    if (n === 0) {

      // ...and we have seen this sum before, stop decomposing. (we reached an infinite cycle)
      if (squaredDigitsSum.has(runningSum)) return runningSum === 1;
      // The original input is a happy number if the final sum is 1
      // ...otherwise it is not a happy number.
      
      
      // ...and we have NOT seen it before, we have NOT reached an infinite cycle.
      // So, remember this value, decompose this number and reset the runningSum to 0.
      squaredDigitsSum.add(runningSum);
      n = runningSum;
      runningSum = 0;
    }
  }
};

// console.log(isHappy(19)); // true
// console.log(isHappy(2)); // false