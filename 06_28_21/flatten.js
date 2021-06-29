// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

var flatten = function(head) {

  let currentNode = head;
  while(currentNode) {

    // if currentNode has a child list, connect child list between the current
    // node and the next node
    if (currentNode.child) insertChild(currentNode);

    // move to the next node and continue...
    currentNode = currentNode.next;
  }

  return head;
}

function insertChild(node) {
  let nextNode = node.next;

  // connect current node and child node together
  node.next = node.child;
  node.child.prev = node;

  // clean current node child
  node.child = null;

  // find the tail of the child list
  while (node.next !== null) node = node.next;

  // connect tail node and nextNode together
  node.next = nextNode;
  if (nextNode) nextNode.prev = node;
}