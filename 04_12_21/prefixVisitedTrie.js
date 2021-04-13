/*
I'm making a search engine called MillionGazillion™.

I wrote a crawler that visits web pages, stores a few keywords in a database, 
and follows links to other web pages. I noticed that my crawler was wasting a 
lot of time visiting the same pages over and over, so I made a set, visited, 
where I'm storing URLs I've already visited. Now the crawler only visits a URL 
if it hasn't already been visited.

Thing is, the crawler is running on my old desktop computer in my 
basement, and it keeps running out of memory because visited is getting so huge.

How can I trim down the amount of space taken up by visited?
*/

class Trie {
  constructor() {
    this.rootNode = {};
  }

  // O(n) time and O(26^n) space, where n is the number of chars of the URL 
  // string input
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