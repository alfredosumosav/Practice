// https://leetcode.com/problems/make-the-string-great/

// Time and space complexity analysis
// O(n) time and O(n) space, where n is the number of characters in the string
var makeGood = function (s) {
  const stack = [""];

  for (let c of s) {
    let top = stack[stack.length - 1];
    if (top.toLowerCase() === c.toLowerCase() && top !== c) stack.pop();
    else stack.push(c);
  }
  return stack.join("");
};