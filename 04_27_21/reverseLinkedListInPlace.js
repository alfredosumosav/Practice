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
  return null;
}

// Tests

let nodes = valuesToLinkedListNodes([1,2]);
console.log(nodes[0]);
console.log(reverse(nodes[0]));