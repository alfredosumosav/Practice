// https://leetcode.com/problems/reverse-linked-list/

// Time and space complexity
// O(n) time and O(1) space, where n is the length of the linkedList
var reverseList = function (head) {
  let currentNode = head;
  let previousNode = null;
  let nextNode = null;

  // Until we have 'fallen off' the end of the list
  while (currentNode) {

    // Copy a pointer to the next element
    // before we overwrite currentNode.next
    nextNode = currentNode.next;

    // Reverse the 'next' pointer
    currentNode.next = previousNode;

    // Step forward in the list
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
};