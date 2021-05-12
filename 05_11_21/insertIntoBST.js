class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var insertIntoBST = function (root, val) {

  if (!root) {
    root = new TreeNode(val);
    return root;
  }

  if (val < root.val) {
    if (!root.left) {
      root.left = new TreeNode(val);
    } else {
      insertIntoBST(root.left, val);
    }
  } else {
    if (!root.right) {
      root.right = new TreeNode(val);
    } else {
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