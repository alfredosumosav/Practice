// O(n^3) time and O(n) space
function longestPalindromicSubstring(string) {
  let result = [];
  let longest = "";
  size = 1;
  while (size <= string.length) {
    for (let i = 0; i < string.length; i++) {
      let temp = string.substr(i, size);
      temp.length === size ? result.push(temp) : "";
    }
    size++;
  }

  for (const string of result) {
    if (isPalindrome(string)) {
      if (string.length > longest.length) {
        longest = string;
      }
    }
  }
  return longest;
}

// O(n) time and O(n) space
function isPalindrome(string) {
  let reversed = string.split("").reverse().join("");
  return string === reversed;
}