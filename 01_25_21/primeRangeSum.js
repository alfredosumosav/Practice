//strategy
//first do a helper function isPrime(number) returns true if number is prime
//initialize a counter result at 0
// iterate in a for loop from num1 to num2 inclusive and check in each iteration if that number is prime.
//if it is will add it to counter result

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    // i=11
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function primeRangeSum(num1, num2) {
  var result = 0; // 60
  if (num2 < num1) {
    a = num2;
    b = num1;
  } else {
    a = num1;
    b = num2;
  }

  for (var i = a; i <= b; i++) {
    // i=20
    if (isPrime(i)) {
      result += i;
    }
  }

  return result;
}

console.log(primeRangeSum(10, 20));
console.log(primeRangeSum(20, 10));
console.log(primeRangeSum(20, 29));
console.log(primeRangeSum(50, 41));
