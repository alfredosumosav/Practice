class LinkedListNodes {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

// creates a linked list from the array of input values
function valuesToLinkedListNodes(values) {
  // store the nodes created
  const nodes = [];
  // for every value in the input array, create a new node and link it
  // to the previous node if at least there are more than one values
  for (let i = 0; i < values.length; i++) {
    // create a new node with the current value
    const node = new LinkedListNodes(values[i]);
    // if I have a previous node...
    if (i > 0) {
      // point the next property to the current node
      nodes[i - 1].next = node;
    }
    // add current node to the nodes store
    nodes.push(node);
  }
  // return the linked list of nodes
  return nodes;
}

function reverse(headOfList) {
  let currentNode = headOfList; // the current node
  let previousNode = null; // the previous node
  let nextNode = null; // the next node

  while (currentNode) {

    // save a reference to the next node
    nextNode = currentNode.next;

    // the currentNode's next should point to the previous node
    currentNode.next = previousNode;

    // previousNode should point to the current node now
    previousNode = currentNode;

    // currentNode should be updated to the stored reference of nextNode
    currentNode = nextNode;

    // continue until currentNode is null and we have overflowed from the linked list
  }

  // our head will now be the reference pointing to the previousNode, after overflowing
  return previousNode;
}

// Tests

let nodes = valuesToLinkedListNodes([1,2]);
console.log(nodes[0]);
console.log(reverse(nodes[0]));