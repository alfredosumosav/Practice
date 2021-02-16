// O(n) time | O(1) space
function reverse(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {
    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}
