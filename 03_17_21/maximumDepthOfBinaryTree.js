// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function (root, initialDepth = 0) {
  if (!root) return initialDepth;

  initialDepth++;

  let leftDepth = root.left ? maxDepth(root.left, initialDepth) : 0;
  let rightDepth = root.right ? maxDepth(root.right, initialDepth) : 0;

  initialDepth = Math.max(initialDepth, leftDepth, rightDepth);

  return initialDepth;
};