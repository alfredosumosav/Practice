/*
You have a walking robot. Given a string of compass direction (e.g. 'nesw' or 'nnssen').
It will travel one mile in each of those directions.
Write a method to determine whether a set of directions will lead your robot back to it's starting position.

EXAMPLES:
validWalk('nnnn'); // => false
validWalk('nenessww'); // => true
*/

function validWalk(string) {
  var directionObj = { n: 1, s: -1, e: -1, w: 1 };
  var position = 0;
  for (var i = 0; i < string.length; i++) {
    var direction = string[i];
    position += directionObj[direction];
  }
  if (position === 0) {
    return true;
  }
  return false;
}

console.log(validWalk('nnnn'));
console.log(validWalk('nenessww'));