function insertionSort(arr) {
  // Insert every unsorted element into a legal spot on the sorted left side
  // of the array.
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i]; // current element, soon to be inserted

    // Loop through sorted array from rtl
    let j;
    for (j = i - 1; j >= 0 && currentElement < arr[j]; j--) {
      // Shift observed element to the right
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentElement; // place currentElement into the sorted side
  }
  return arr;
}
