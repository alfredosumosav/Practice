function bubbleSort(array) {
  let swapped = true;

  // Keep scanning through the array until there is no need to swap (is ordered)
  while (swapped) {
    swapped = false;

    // pass through every element and if current element and next element
    // are unordered, fix the order by swapping them
    for (let i = 0; i < array.length - 1; i++) {
      // if current element is greater than the next element, the array is
      // unordered, so swap it
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1); // swap current element with next element
        swapped = true; // remember that you swapped
      }
    }
  }

  return array;
}