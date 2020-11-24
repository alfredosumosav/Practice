// swap 2 elements
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

function selectionSort(arr) {
  // swap the firstElement and minValueElement, from the unsorted side of the
  // array(right), reducing the unsorted side by 1 and increasing the sorted 
  // size by 1. 
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // first unsorted element

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j; // Index of the smallest value.
      }
    }

    swap(arr, i, minIndex);
  }
  return arr;
}

console.log(selectionSort([7, 7, 8, 8, 9, 9]));
console.log(selectionSort([9, 7, 8, 8, 9, 7]));
console.log(selectionSort([8, 8, 7, 9, 9, 9, 8, 9, 7]));
console.log(selectionSort([9, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7]));
console.log(selectionSort([9, 9, 9, 7, 7, 8, 9, 7, 8, 9, 7, 9]));
console.log(selectionSort([9, 9, 7, 7, 8, 8]));
console.log(selectionSort([9, 7, 9]));
console.log(selectionSort([8, 7, 8]));
console.log(selectionSort([7, 8, 7, 8]));
console.log(selectionSort([8, 8, 7, 8]));
console.log(selectionSort([8, 8, 7, 7, 8]));