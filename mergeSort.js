function merge(array1, array2) {
  const merged = [];

  // loop while array1 or array2 have elements (length)
  while (array1.length || array2.length) {
    // get the smallest between array1 and array2
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;

    // remove the smallest element from the array
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    // push it to merged
    merged.push(next);
  }

  //return merged
  return merged;
}

function mergeSort(array) {
  // if array length is 1 or 0 (empty)
  // It is already sorted, so return sorted array
  if (array.length <= 1) return array;

  const midIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, midIndex);
  const rightArr = array.slice(midIndex);

  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  return merge(sortedLeftArr, sortedRightArr);
}
