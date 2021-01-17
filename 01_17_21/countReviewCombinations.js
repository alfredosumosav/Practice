var countReviewCombinations = function (num, lengths, minReviews, minLength, maxLength) {
  let newLengths = lengths.sort((a, b) => a - b); // O(nlog(n))
  let validLengths = [];
  let counter = 0;
  let r = minReviews;

  for (let i = 0; i < newLengths.length; i++) {
    if (newLengths[i] >= minLength && newLengths[i] <= maxLength) {
      validLengths.push(newLengths[i]);
    }
  }

  for (let j = r; j <= validLengths.length; j++) {
    let way = factorial(validLengths.length) / (factorial(j) * factorial(validLengths.length - j));
    counter += way;
  }

  return counter;
}

function factorial(num) {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

console.log(countReviewCombinations(8, [6, 13, 5, 10, 12, 4, 2, 15], 3, 4, 10)); // 5