function funWithAnagrams(text) {
  let set = new Set();

  text = text
    .filter((string) => {
      // order string alphabetically
      const orderedString = string.split("").sort().join("");

      // if orderedString exists, delete this string from the result
      if (set.has(orderedString)) return false;

      // otherwise, add orderedString to the set
      set.add(orderedString);
      return true;
    })
    .sort();

  return text;
}

console.log(funWithAnagrams(["code", "aaagmnrs", "anagrams", "doce"])); // ["aaagmnrs", "code"]