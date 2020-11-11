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

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(12210)); // false