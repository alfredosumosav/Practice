/*
 You have a linked list and want to find the Kth to last node.

Write a function kthToLastNode() that takes an integer kkk and the headNode of
a singly-linked list, and returns the Kth to last node in the list.
*/

class LinkedListNode {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

// Time and space complexity analysis
// O(n) time and O(1) space, where n is the length of the linked list
function kthToLastNode(k, headNode) {

  // contar la longitud de la linked list
  let currentNode = headNode;
  let length = 0;
  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }

  // iterarla hasta longitud - k (difference)
  // PreviousNode = null;
  let i = 0;
  const diff = length - k;
  while (i < length) {
    if (i === diff) return headNode;

    headNode = headNode.next;
    i++;
  }

  throw new Error('k needs to be between 1 and the length of the linked list!');
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(7, a )); // node with value "Devil's Food" (the 2nd to last node)