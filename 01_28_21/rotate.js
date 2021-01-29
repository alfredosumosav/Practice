// const test = require("tape");

/*
Return a new array by rotating the given array so that the element at the given index is the first element of the new array.

If the given index is negative then it rotates in the opposite direction, starting from the end of the given array where -1 is the last element.
*/

function rotate(elements, index = 1) {
  let copy = elements.slice(0);

  i = 0;
  // loop until i reaches index
  while (i < Math.abs(index)) {
    // based on index sign
    if (index > 0) {
      // if +
      // rotate in one direction
      let temp = copy.shift();
      copy.push(temp);
    } else if (index < 0) {
      // if -
      // rotate in opposite direction
      let temp = copy.pop();
      copy.unshift(temp);
    }
    // increment counter
    i++;
  }

  // return back rotated array
  return copy;
}

const zero = "zero";
const one = 1;
const two = true;
const three = "tres";
const four = { number: 4 };
const five = ["cinq", 101];
let elements = [zero, one, two, three, four, five];
console.log(rotate(elements))
console.log(rotate(elements, 2))
console.log(rotate(elements, 5))
console.log(rotate(elements, -3))