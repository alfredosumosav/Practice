/*
Write a function safeSpeedChange(speeds) that takes in an array of speed
numbers. The function should return true if consecutive speeds in the
array differ by no more than 5, false otherwise.
*/

function safeSpeedChange(speeds) {
  for (var i = 0; i < speeds.length - 1; i++) {
    var curr = speeds[i];
    var next = speeds[i + 1];
    var dif = Math.abs(next - curr);
    if (dif > 5) {
      return false;
    }
  }

  return true;
}

console.log(safeSpeedChange([3, 3, 2, 6, 8, 7])); //=> true
console.log(safeSpeedChange([3, 3, 2, 6, 12, 10])); // => false
console.log(safeSpeedChange([8, 10, 4, 3, 2])); // => false
