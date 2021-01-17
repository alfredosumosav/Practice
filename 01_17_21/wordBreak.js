function wordBreak(s, wordDict) {
  let table = new Array(s.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === false) continue;

    for (let j = i + 1; j < table.length; j++) {
      let word = s.slice(i, j);
      if (wordDict.includes(word)) {
        table[j] = true;
      }
    }
  }
  return table[table.length - 1];
}