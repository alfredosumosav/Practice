// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal

class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Time and Space complexity analysis
// O(n * h) time and O(h) space, where n is the number of nodes of the BST and h is the height of the BST
var bstFromPreorder = function (preorder) {

  // The root of the BST
  const root = new TreeNode(preorder.shift());

  // while there are values to be inserted, recursively insert the next value into the root of the BST
  while (preorder.length) {

    const nextNode = preorder.shift();
    insert(nextNode, root);
  }

  // return the root of the BST
  return root;
}

// recursively insert a value in the root of a BST
function insert(val, root) {

  // if the value is smaller than the root's value...
  if (val < root.val) {

    if (!root.left) {  // ...and there is no left child

      // set the left child of the root with the value
      root.left = new TreeNode(val);

    } else {  // ...and the left child already exists

      // recursively insert the value on the left subtree of the root
      insert(val, root.left);
    }

    // otherwise, the value is greater than or equal than the root...
  } else {

    if (!root.right) {  // ...and there is no right child

      // set the right child of the root with the value
      root.right = new TreeNode(val);

    } else {  // ...and the right child already exists

      // recursively insert the value on the right subtree of the root
      insert(val, root.right);
    }
  }
}

const arr = [8, 5, 1, 7, 10, 12];

const arr2 = [1, 3];

console.log(bstFromPreorder(arr)); // [8, 5, 10, 7, null, 12]
console.log(bstFromPreorder(arr2)); // [1, null, 3]