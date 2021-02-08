/*
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.
*/

/*
strategy
return new array with two subarrays which are going to be
each half the original array.. if # elements are odd exclude
the middle element from answer
*/

// O(n) time and O(n) space where n is the number of elements of the input array
function splitHalfArray(array) {
  var arr1 = []; // [1, 2]
  var arr2 = []; // [4, 5]

  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    // i=2
    var front = array[i]; // 2
    var back = array[array.length - 1 - i]; // 4
    arr1.push(front);
    arr2.unshift(back);
  }

  return [arr1, arr2];
}

console.log(splitHalfArray([1, 2, 3, 4, 5])); // [ [ 1, 2 ], [ 4, 5 ] ]
console.log(splitHalfArray(["a", "b", "c", "d", "e", "f"])); // [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]