/*
Given a sequence of 3 different key values `(7, 8, 9)`, find the minimum number 
of exchange operations (switching 2 key values in the sequence) necessary to 
make the sequence sorted.
*/

// swap 2 elements
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

// swap the firstElement and minValueElement, from the unsorted side of the
// array(right), reducing the unsorted side by 1 and increasing the sorted 
// size by 1. 
function exchangeSort(arr) {
  // count the number of swaps
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] >= arr[j]) {
        minIndex = j;
      }
    }

    // If the smallest unsorted element is different than my current element
    // there's no need to swap. continue to the next unsorted element.
    if (arr[i] !== arr[minIndex]) {
      swap(arr, i, minIndex);
      counter++;
    }
  }

  return counter;
}

console.log(exchangeSort([7, 7, 8, 8, 9, 9]));                              // 0
console.log(exchangeSort([9, 7, 8, 8, 9, 7]));                              // 1
console.log(exchangeSort([8, 8, 7, 9, 9, 9, 8, 9, 7]));                     // 4
console.log(exchangeSort([9, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7]));   // 6
console.log(exchangeSort([9, 9, 9, 7, 7, 8, 9, 7, 8, 9, 7, 9]));            // 4
console.log(exchangeSort([9, 9, 7, 7, 8, 8]));                              // 4
console.log(exchangeSort([9, 7, 9]));       // 1
console.log(exchangeSort([8, 7, 8]));       // 1
console.log(exchangeSort([7, 8, 7, 8]));    // 1
console.log(exchangeSort([8, 8, 7, 8]));    // 1
console.log(exchangeSort([8, 8, 7, 7, 8])); // 2
