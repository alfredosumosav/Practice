function nodeDepths(root, depth = 0) {
  if (root.left === null && root.right === null) {
    return depth;
  }

  let leftSum = root.left ? nodeDepths(root.left, depth + 1) : 0;
  let rightSum = root.right ? nodeDepths(root.right, depth + 1) : 0;

  return leftSum + rightSum + depth;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}