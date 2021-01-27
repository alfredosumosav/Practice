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