/*
Write a recursive function `multiply(a, b)` that takes in two numbers
and returns their product. You may not use the multiplication operation `*` in
your solution :). Do this recursively, without loops. You may
assume that `a` and `b` are nonnegative numbers.
*/

function multiply(a, b) {
  if (a === 0) {
    return 0;
  }

  var answer = b + multiply(a - 1, b);
  return answer;
}