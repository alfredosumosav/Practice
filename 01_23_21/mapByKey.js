/*
Write a function mapByKey(array, key) that takes in an array of objects and a key string.
The method should returns a new array containing the
values from each object for the given key.
*/

function mapByKey(array, key) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var obj = array[i];
    result.push(obj[key]);
  }
  return result;
}

var locations = [
  { city: "New York City", state: "New York", coast: "East" },
  { city: "San Francisco", state: "California", coast: "West" },
  { city: "Portland", state: "Oregon", coast: "West" },
];

console.log(mapByKey(locations, "state"));
console.log(mapByKey(locations, "city"));