// https://leetcode.com/problems/number-of-good-ways-to-split-a-string/

var numSplits = function (s) {
  // declarar numGoodSplits
  let numGoodSplits = 0;

  // encontrar cada split posible
  for (let i = 0; i < s.length; i++) {
    const p1 = s.slice(0, i);
    const p2 = s.slice(i);

    // para cada split, es un **buen split**?
    if (goodSplit(p1, p2)) numGoodSplits++;
    // si
    // inc counter
  }
  return numGoodSplits;
};

// O(n) time and O(1) space
var goodSplit = function (s1, s2) {
  // contar letras unicas en s1
  const count1 = countUniqueLetters(s1);

  // contar letras unicas en s2
  const count2 = countUniqueLetters(s2);

  // retornar son los contadores iguales?
  return count1 === count2;
};

// O(n) time and O(n) space
var countUniqueLetters = function (string) {
  let lastSeen = new Set(`${string[0]}`);

  for (let i = 1; i < string.length; i++) {
    lastSeen.add(string[i]);
  }

  return lastSeen.size;
};