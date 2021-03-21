function findDiference(num1, num2) {
  // find the minimum number of moves between 2 numbers
  let count = 0;
  
  while (num1 !== 0) {
    let rem1 = num1 % 10;
    let rem2 = num2 % 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);

    let diff = Math.abs(rem2 - rem1);
    count += diff;
  }
  return count;
}

function minimumMoves(arr1, arr2) {
  let count = 0;

  for (let pos = 0; pos < arr1.length; pos++) {
    let diff = findDiference(arr1[pos], arr2[pos]);
    count += diff;
  }

  return count;
}

arr1 = [123, 543];

arr2 = [321, 279];
console.log(minimumMoves(arr1, arr2)); // 16

arr3 = [1234, 4321];
arr4 = [2345, 3214];
console.log(minimumMoves(arr3, arr4)); // 10

arr5 = [2468];
arr6 = [8642];
console.log(minimumMoves(arr5, arr6)); // 16

// console.log(minimumMoves(arr1, arr2)); // 16

// console.log(findDiference(123, 321)); // 4
// console.log(findDiference(543, 279)); // 12
// console.log(findDiference(1234, 2345)); // 4
// console.log(findDiference(4321, 3214)); // 6
// console.log(findDiference(2468, 8642)); // 16