/*
Write a method all_else_equal that takes in an array of numbers.
The method should return the element of the array that is equal to half
of the sum of all elements of the array. If there is no such element,
the method should return null.
*/

// Time and Space complexity
// O(n) time and O(1) space where n is the number of elements in the array.
function allElseEqual(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    sum += num;
  }

  if (numbers.indexOf(sum / 2) > -1) {
    return numbers[numbers.indexOf(sum / 2)];
  } else {
    return null;
  }
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // => 10, because the sum of all elements is 20
console.log(allElseEqual([6, 3, 5, -9, 1])); // => 3, because the sum of all elements is 6
console.log(allElseEqual([1, 2, 3, 4])); // => null, because the sum of all elements is 10 and there is no 5 in the array
