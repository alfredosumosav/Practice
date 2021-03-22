// https://leetcode.com/problems/reverse-linked-list/

// Time and space complexity
// O(n) time and O(1) space, where n is the length of the linkedList
var reverseList = function (head) {
  let currentNode = head;
  let previousNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;

    currentNode.next = previousNode;

    previousNode = currentNode;

    currentNode = nextNode;
  }

  return previousNode;
};