/***********************************************************************
Write a function `smallestPrime(array)` that takes in an array of
numbers and returns the smallest prime number in the array.
*/

/*
create a helper function isPrime(num);
create var minPrime to store the minimun prime and assign to null;
iterate array and if element is prime check if it's less than minPrime; if true update minPrime; otherwise continue;
return minPrime;
*/

// O(n) time and O(1) space where n is the number of elements in the unput array
function smallestPrime(array) {
  // [6, 7, 12, 11, 5, 4]
  var minPrime = null; // 5

  for (var i = 0; i < array.length; i++) {
    // i=5 | 0,1,2,3,4,5
    var num = array[i]; // 4
    if (isPrime(num) && (num < minPrime || minPrime === null)) {
      minPrime = num; // 5
    }
  }

  return minPrime; // 5
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

var arr1 = [6, 7, 12, 11, 5, 4];
console.log(smallestPrime(arr1)); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
console.log(smallestPrime(arr2)); // => 7

var arr3 = [];
console.log(smallestPrime(arr3)); // => null

var arr4 = [4, 6, 8, 10];
console.log(smallestPrime(arr4)); // => null