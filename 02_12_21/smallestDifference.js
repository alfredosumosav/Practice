// https://www.algoexpert.io/questions/Smallest%20Difference

// O(n^2) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here. [-1, 5, 28, 3], [26, 134, 135, 15]
  let minPair = []; // [28, 26]
  let currMinDiff = Infinity; // 2
  let absDiff;
  for (let i = 0; i < arrayOne.length; i++) {
    // i = 0
    let eleOne = arrayOne[i]; // -1
    for (let j = 0; j < arrayTwo.length; j++) {
      let eleTwo = arrayTwo[j]; // 26
      let maxNum = Math.max(eleOne, eleTwo); // 26
      if (maxNum === eleOne) {
        absDiff = maxNum - eleTwo;
      } else if (maxNum === eleTwo) {
        absDiff = maxNum - eleOne; // 26 - (-1) -> 27
      }
      if (absDiff < currMinDiff) {
        currMinDiff = absDiff;
        minPair = [eleOne, eleTwo];
      }
    }
  }
  return minPair;
}