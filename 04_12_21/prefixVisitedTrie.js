  class Trie {
  constructor() {
    this.rootNode = {};
  }

  addWord(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;

    // Work downwards through the trie, adding nodes
    // as needed, and keeping track of whether we add
    // any nodes.
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currentNode.hasOwnProperty(char)) {
        isNewWord = true;
        currentNode[char] = {};
      }
      currentNode = currentNode[char];
    }

    // Explicitly mark the end of a word.
    // Otherwise, we might say a word is
    // present if it is a prefix of a different,
    // longer word that was added earlier.
    if (!currentNode.hasOwnProperty('End of Word')) {
      isNewWord = true;
      currentNode['End of Word'] = {};
    }

    return isNewWord;
  }
}