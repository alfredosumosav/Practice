/*
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.
*/

function elementCount(array) {
  var countObj = {};

  for (var i = 0; i < array.length; i += 1) {
    var key = array[i];

    if (countObj[key] === undefined) {
      countObj[key] = 1;
    } else {
      countObj[key] += 1;
    }
  }

  return countObj;
}

// O(n) time and O(n) space, where n is the number of elements in the input array
function oddOnesOut(array) {
  var count = elementCount(array);
  var result = [];

  for (var ele in count) {
    if (count[ele] % 2 === 0) {
      result.push(ele);
    }
  }

  return result;
}

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2)); // => [ 'fish' ]