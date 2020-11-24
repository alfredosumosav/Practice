// Swap 2 elements
function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}

function bubbleSort(array) {
  let swapped = true;

  // Keep scanning the array until there is no need to swap (is ordered)
  while (swapped) {
    swapped = false;

    // pass through every element.
    for (let i = 0; i < array.length - 1; i++) {
      const unordered = array[i] > array[i + 1]; // ASC order
      // const unordered = array[i] < array[i + 1]; // DSC order

      // if currentElement > nextElement, it's unordered (ASC), so swap them.
      if (unordered) {
        swap(array, i, i + 1);
        swapped = true; // remember that you swapped
      }
    }
  }

  return array;
}

console.log(bubbleSort([7, 7, 8, 8, 9, 9]));
console.log(bubbleSort([9, 7, 8, 8, 9, 7]));
console.log(bubbleSort([8, 8, 7, 9, 9, 9, 8, 9, 7]));
console.log(bubbleSort([9, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7]));
console.log(bubbleSort([9, 9, 9, 7, 7, 8, 9, 7, 8, 9, 7, 9]));
console.log(bubbleSort([9, 9, 7, 7, 8, 8]));
console.log(bubbleSort([9, 7, 9]));
console.log(bubbleSort([8, 7, 8]));
console.log(bubbleSort([7, 8, 7, 8]));
console.log(bubbleSort([8, 8, 7, 8]));
console.log(bubbleSort([8, 8, 7, 7, 8]));