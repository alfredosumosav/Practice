/*
Write a function for reversing a linked list out-of-place.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Time and space complexity analysis
// O(n) time and O(n) space, where n is the total number of nodes of the linked list
function reverse(headOfList) {
  let currentNode = headOfList;
  let previousNode = null;
  let nextNode = null;
  let newNode;
  
  while (currentNode) {
    // create a new node
    newNode = new LinkedListNode(currentNode.value);
    // point nextNode to next node
    nextNode = currentNode.next;
    // assign next of new node to previous node
    newNode.next = previousNode;
    // update previous node to current node
    previousNode = newNode;
    // update current node to nextNode 
    currentNode = nextNode;
  }
  
  // retornar previous node
  return newNode;
}

// const a = new LinkedListNode(1);
// const b = new LinkedListNode(2);
// const c = new LinkedListNode(3);
// const d = new LinkedListNode(4);

// a.next = b;
// b.next = c;
// c.next = d;

// console.log(reverse(a)); // 4 -> 3 -> 2 -> 1