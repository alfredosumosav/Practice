// O(n) time || O(n) space
var isPalindrome = function (x) {
  if (x < 0) return false;

  const x2 = String(x);
  let res = "";

  for (let i = x2.length - 1; i >= 0; i--) {
    const char = x2[i];
    res += char;
  }

  return x2 === res;
}

// Without converting to string
var isPalindrome = function (x) {
  // copy input
  let n = x;
  if (n < 0) return false;

  // store decomposed numbers
  let array = [];

  // perform decomposition
  while (n !== 0) {
    let rem = n % 10;
    array.unshift(rem);
    n = Math.floor(n / 10);
  }

  let first = 0; // first pointer
  let last = array.length - 1; // last pointer
  let isNumPalindrome = true; // result
  
  // use two pointers technique to check palindromicity
  while (first <= last) {
    if (array[first] !== array[last]) {
      // is not a palindrome
      isNumPalindrome = false;
      break;
    }
    first++;
    last--;
  }
  // it is palindrome
  return isNumPalindrome;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(12210)); // false