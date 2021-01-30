// O(n) time and O(n) space, where n is the number of elements in the input array
function uniqueItems(array) {
  var obj = {};
  var ans = [];

  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
  }

  for (var key in obj) {
    var value = obj[key];
    if (value === 1) {
      ans.push(key);
    }
  }

  return ans;
}

console.log(uniqueItems([1, 1])); // []
console.log(uniqueItems([1, 2, 3])); // [1, 2, 3]
console.log(uniqueItems([1, 2, 2])); // [1]
console.log(uniqueItems([1, 5, 5, 7, 16, 8, 1, 8])); // [7, 16]