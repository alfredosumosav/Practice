function findRepeat(numbers) {
  // handle edge case: input array is less than two numbers
  if (numbers.length < 2) {
    throw new Error('Finding duplicates requires at least two numbers');
  }

  const n = numbers.length - 1;
  // using triangular series' formula
  const sumWithoutDuplicate = (n * n + n) / 2;
  const actualSum = numbers.reduce((acc, curr) => acc + curr, 0);

  return actualSum - sumWithoutDuplicate;
}

console.log(findRepeat([1,2,1])); // 1
console.log(findRepeat([4,1,3,4,2])); // 4
console.log(findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4])); // 2