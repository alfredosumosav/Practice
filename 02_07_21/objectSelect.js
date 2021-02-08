/*
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.
*/

// O(n) time and O(n) space where n is the number of elements in the obj
function objectSelect(obj, callback) {
  var newObj = {};

  for (var key in obj) {
    var value = obj[key];
    if (callback(key, value)) {
      newObj[key] = value;
    }
  }

  return newObj;
}

function isEqual(a, b) {
  return a === b;
}

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing.",
};

console.log(objectSelect(obj, isEqual));