/*
Write a function for reversing a linked list out-of-place.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    previousNode = currentNode;
    
    // update current node to nextNode 
    currentNode = nextNode;
  }
  
  // retornar previous node
  return previousNode;
}