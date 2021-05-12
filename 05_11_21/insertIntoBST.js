// https://leetcode.com/problems/insert-into-a-binary-search-tree/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Time and Space complexity analysis
// O(h) time and O(h) space, where h is the height of the BST
var insertIntoBST = function (root, val) {

  // if root is empty, set the root with the value provided
  if (!root) {
    root = new TreeNode(val);
    return root;
  }

  // if the value is smaller than the root's value...
  if (val < root.val) {

    if (!root.left) {  // ...and there is no left child

      // set the left child of the root with the value
      root.left = new TreeNode(val);
    } else {  // ...and the left child already exists

      // recursively insert the value on the left subtree of the root
      insertIntoBST(root.left, val);
    }

    // otherwise, the value is greater than or equal than the root...
  } else {


    if (!root.right) {  // ...and there is no right child

      // set the right child of the root with the value
      root.right = new TreeNode(val);
    } else {  // ...and the right child already exists

      // recursively insert the value on the right subtree of the root
      insertIntoBST(root.right, val);
    }
  }

  return root;
}

// const root = new TreeNode(4);
// const n1 = new TreeNode(1);
// const n2 = new TreeNode(2);
// const n3 = new TreeNode(3);
// const n4 = new TreeNode(7);

// root.left = n2;
// root.right = n4;
// n2.left = n1;
// n2.right = n3;

// console.log(insertIntoBST(root, 5)); //

module.exports = {
  insertIntoBST,
  TreeNode
}