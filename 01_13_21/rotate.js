/*
Return a new array by rotating the given array so that the element at the given index is the first element of the new array.

If the given index is negative then it rotates in the opposite direction, starting from the end of the given array where -1 is the last element.
*/

// loop until i reaches index
  // based on index sign
    // if +
      // rotate in one direction
    // if -
      // rotate in opposite direction
// increment counter
// return back rotated array

function rotate(elements, index = 1) {
  let copy = elements.slice(0);

  i = 0;
  while (i < Math.abs(index)) {
    if (index > 0) {
      let temp = copy.shift();
      copy.push(temp);
    } else if (index < 0) {
      let temp = copy.pop();
      copy.unshift(temp);
    }
    i++;
  }

  return copy;
}

const zero = "zero";
const one = 1;
const two = true;
const three = "tres";
const four = { number: 4 };
const five = ["cinq", 101];
let elements = [zero, one, two, three, four, five];
console.log(rotate(elements));
console.log(rotate(elements, 2));
console.log(rotate(elements, 5));
console.log(rotate(elements, -3));