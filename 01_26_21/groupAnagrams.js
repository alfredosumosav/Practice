// O(w*n*log(n)) time and O(w*n) space, where w is the number of words and n is 
// the length of the longest word
function groupAnagrams(words) {
  let anagrams = {};

  for (word of words) {
    const sortedWord = word.split("").sort().join("");
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }

  return Object.values(anagrams);
}

console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"])); // [["yo", "oy"], ["act", "tac", "cat"], ["flop", "olfp"], ["foo"]]
console.log(groupAnagrams([])); // []
console.log(groupAnagrams(["test"])); // [["test"]]
console.log(groupAnagrams(["abc", "dabd", "bca", "cab", "ddba"])); // [["abc", "bca", "cab"], ["dabd", "ddba"]]
console.log(groupAnagrams(["abc", "cba", "bca"])); // [["abc", "cba", "bca"]]
console.log(groupAnagrams(["zxc", "asd", "weq", "sda", "qwe", "xcz"])); // [["zxc", "xcz"], ["asd", "sda"], ["weq", "qwe"]]
console.log(groupAnagrams(["cinema", "a", "flop", "iceman", "meacyne", "lofp", "olfp"])); // [["cinema", "iceman"], ["a"], ["flop", "lofp", "olfp"], ["meacyne"]]
console.log(groupAnagrams(["abc", "abe", "abf", "abg"])); // [["abc"], ["abe"], ["abf"], ["abg"]]
console.log(groupAnagrams(["aaa", "a"])); // [["aaa"], ["a"]]
console.log(groupAnagrams(["bob", "boo"])); // [["bob"], ["boo"]]
console.log(groupAnagrams(["ill", "duh"])); // [["ill"], ["duh"]]
console.log(groupAnagrams(["yo", "oy", "zn"])); // [["yo", "oy"], ["zn"]]
console.log(groupAnagrams(["yyo", "yo"])); // [["yyo"], ["yo"]]
console.log(groupAnagrams(["aca", "bba"])); // [["aca"], ["bba"]]