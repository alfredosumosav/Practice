// removeEveryNth
//
// Write a function `removeEveryNth(arr, n)` that takes in an array and a number, n.
// The function should return a new array where the first element and every "n-th"
// element after is removed from the original array.
//
// Examples:
//
var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
// removeEveryNth(arr, 2); // => [ 'b', 'd', 'f', 'h', 'j' ]
// removeEveryNth(arr, 3); // => [ 'b', 'c', 'e', 'f', 'h', 'i', 'k' ]
// removeEveryNth(arr, 4); // => [ 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k' ]
// removeEveryNth(arr, 1); // => []

function removeEveryNth(arr, n) {
  var newArr = arr.filter(function (ele, i, arr) {
    if (i === 0) {
      return false;
    } else if (i % n !== 0) {
      return true;
    }
    return false;
  });
  return newArr;
}

// console.log(removeEveryNth(arr, 2));
// console.log(removeEveryNth(arr, 3));
// console.log(removeEveryNth(arr, 4));
// console.log(removeEveryNth(arr, 1));

function removeEveryNth(arr, n) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      continue;
    } else if (i % n !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(removeEveryNth(arr, 2));
// console.log(removeEveryNth(arr, 3));
// console.log(removeEveryNth(arr, 4));
// console.log(removeEveryNth(arr, 1));