// https://leetcode.com/problems/partition-labels/

// O(n) time and O(n) space
var partitionLabels = function (S) {
  const dict = "abcdefghijklmnopqrstuvwxyz";
  let lastIndexes = {};

  for (const letter of dict) {
    let lastIndex = S.lastIndexOf(letter);
    if (lastIndex > -1) {
      lastIndexes[letter] = lastIndex;
    }
  }

  let left = 0;
  let right = 0;
  let res = [];

  for (let i = 0; i < S.length; i++) {
    let letter = S[i];

    if (lastIndexes[letter] > right) {
      right = lastIndexes[letter];
    } else if (i === right) {
      res.push(lastIndexes[letter] - left + 1);
      left = i + 1;
      right = lastIndexes[letter] + 1;
    }
  }

  return res;
};