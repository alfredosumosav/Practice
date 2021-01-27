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

console.log(longestPalindromicSubstring("abaxyzzyxf")); //"xyzzyx"
console.log(longestPalindromicSubstring("a")); // "a"
console.log(longestPalindromicSubstring("it's highnoon")); // "noon"
console.log(longestPalindromicSubstring("noon high it is")); // "noon"
console.log(longestPalindromicSubstring("abccbait's highnoon")); // "abccba"
console.log(longestPalindromicSubstring("abcdefgfedcbazzzzzzzzzzzzzzzzzzzz")); // "zzzzzzzzzzzzzzzzzzzz"
console.log(longestPalindromicSubstring("abcdefgfedcba")); // "abcdefgfedcba"
console.log(longestPalindromicSubstring("abcdefghfedcbaa")); // "aa"
console.log(longestPalindromicSubstring("abcdefggfedcba")); // "abcdefggfedcba"
console.log(longestPalindromicSubstring("zzzzzzz2345abbbba5432zzbbababa")); // "zz2345abbbba5432zz"
console.log(longestPalindromicSubstring("z234a5abbbba54a32z")); // "5abbbba5"
console.log(longestPalindromicSubstring("z234a5abbba54a32z")); // "5abbba5"
console.log(longestPalindromicSubstring("ab12365456321bb")); // "b12365456321b"
console.log(longestPalindromicSubstring("aca")); // "aca"