function mergeArrays(myArray, alicesArray) {
  
  let mergedArray = [];

  // Combine the sorted arrays into one large sorted array
  while (myArray.length || alicesArray.length) {
    let headOfMyArray = myArray[0] ? myArray[0] : Infinity;
    let headOfAlicesArray = alicesArray[0] ? alicesArray[0] : Infinity;
    
    if (headOfMyArray < headOfAlicesArray) {
      mergedArray.push(headOfMyArray);
      myArray.shift();
    } else {
      mergedArray.push(headOfAlicesArray);
      alicesArray.shift();
    }
  }

  return mergedArray;
}