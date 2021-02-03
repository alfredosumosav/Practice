/***********************************************************************
Write a recursive function `countUp(num)` that takes in a number and
prints all whole numbers from `num` to 10. It should print 'done!' upon
reaching 10 or greater. Do this recursively, without loops.
*/

function countUp(num) {
  if (num >= 10) {
    console.log("done!");
    return;
  }

  console.log(num);
  countUp(num + 1);
}

console.log(countUp(3)); // prints:
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// done!

console.log(countUp(20)); // prints done!