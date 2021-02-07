/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.
*/

/*
strategy
declare new variable empty arr;
iterate through the array and grab each element; split the element
by the space ' ' and check the last element of the new array splitted
if it's yard then convert number to feet and push to  new array; if not just push element to new array;
*/

// O(n) time and O(n) space where n is the number of elements in the input array
function toFeet(distances) {
  var ans = [];

  for (var i = 0; i < distances.length; i++) {
    var dis = distances[i];
    var disArr = dis.split(" ");
    if (disArr[disArr.length - 1] === "yards") {
      var element = Number(disArr[0]) * 3 + " feet";
      ans.push(element);
    } else {
      var element = Number(disArr[0]) + " feet";
      ans.push(element);
    }
  }

  return ans;
}

var arr1 = ["10 feet", "3 yards", "5 yards", "3 feet"];
console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ["2 yards", "3 feet", "10 yards"];
console.log(toFeet(arr2)); // => [ '6 feet', '3 feet', '30 feet' ]