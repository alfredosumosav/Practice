// Time and space complexity analysis
// O(n) time and O(1) space, where n is the total numbers of stairs to climb
var climbStairs = function (n) {
  // Edge cases:
  if (n < 0) {
    throw new Error(
      "Index was negative. No such thing as a negative index in a series."
    );
  } else if (n === 1 || n === 2) {
    return n;
  }

  let prevPrev = 1; // steps to climb 1 stair
  let prev = 2; // steps to climb 2 stairs
  let current; // Declare current

  for (let i = 2; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
};
