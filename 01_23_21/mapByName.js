/*
Write a function mapByName  that takes in an array of objects and returns
a new array containing the names of each object.
*/

function mapByName(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    var obj = array[i];
    result.push(obj.name);
  }
  return result;
}

var pets = [
  { type: "dog", name: "Rolo" },
  { type: "cat", name: "Sunny" },
  { type: "rat", name: "Saki" },
  { type: "dog", name: "Finn" },
  { type: "cat", name: "Buffy" },
];

var countries = [
  { name: "Japan", continent: "Asia" },
  { name: "Hungary", continent: "Europe" },
  { name: "Kenya", continent: "Africa" },
];

console.log(mapByName(pets));
console.log(mapByName(countries));