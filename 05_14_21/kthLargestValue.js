class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Time and Space complexity analysis.
// O(n) time and O(n) space.
function kthLargestValue(tree, k) {
  if (k === 0) throw new Error('k cannot be zero');
  if (!tree) throw new Error('cannot return an element from an empty BST tree');


  // using a DFS traversal, return an array with the values of every node sorted in increasing order.
  const sortedNodeValues = traverseDFS(tree);

  // return the kth largest value from the sorted node values array.
  return sortedNodeValues[sortedNodeValues.length - k];
}

function traverseDFS(root, sortedNodeValues = []) {
  // if the node is empty, return.
  if (!root) return;

  // if the left child exist, recursively traverse the left subtree.
  if (root.left) traverseDFS(root.left, sortedNodeValues);
  // store the current value.
  sortedNodeValues.push(root.value);
  // if the right child exist, recursively traverse the right subtree.
  if (root.right) traverseDFS(root.right, sortedNodeValues);

  // return an array of sorted node values.
  return sortedNodeValues;
}
