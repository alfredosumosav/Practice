class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var bstFromPreorder = function (preorder) {
  const root = new TreeNode(preorder.shift());

  while (preorder.length) {

    const nextNode = preorder.shift();
    insert(nextNode, root);
  }

  return root;
}

function insert(val, root) {
  if (val < root.val) {
    if (!root.left) {
      root.left = new TreeNode(val);
    } else {
      insert(val, root.left);
    }
  } else {
    if (!root.right) {
      root.right = new TreeNode(val);
    } else {
      insert(val, root.right);
    }
  }
}

const arr = [8, 5, 1, 7, 10, 12];

const arr2 = [1, 3];

console.log(bstFromPreorder(arr)); // [8, 5, 10, 7, null, 12]
console.log(bstFromPreorder(arr2)); // [1, null, 3]