// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578

// O(n) time | O(n) space
function lucasNumberMemo(n, memo = {}) {
  if (n in memo) return memo[n];

  if (n === 1) return 1;
  if (n === 0) return 2;

  memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
  return memo[n];
}
