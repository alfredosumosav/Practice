/*
Build a function that takes an array of integers and returns a new array of 
integers where the prime numbers are replaced by the corresponding next prime
*/
function nextPrime(arr) {
  var ans = [];

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (isPrime(num)) {
      ans.push(nextPrimeNum(num));
    } else {
      ans.push(num);
    }
  }

  return ans;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function nextPrimeNum(n) {
  var ans = null;
  n = n + 1;

  while (ans === null) {
    if (isPrime(n)) {
      ans = n;
    }
    n++;
  }

  return ans;
}

console.log(nextPrime([11, 13, 17])); // [ 13, 17, 19 ]
console.log(nextPrime([4, 6, 8, 10])); // [ 4, 6, 8, 10 ]
console.log(nextPrime([2, 5, 4, 7])); // [ 3, 7, 4, 11 ]