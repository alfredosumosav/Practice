// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// O(2^n) time and O(n) space
var maxDepth = function (root, initialDepth = 0) {
  // if the node is null, return the initial depth
  if (!root) return initialDepth;

  // increase the depth by 1, to include current level
  initialDepth++;

  // recursively find the max depth of each subtree
  let leftDepth = root.left ? maxDepth(root.left, initialDepth) : 0;
  let rightDepth = root.right ? maxDepth(root.right, initialDepth) : 0;

  // return the deepest path
  initialDepth = Math.max(initialDepth, leftDepth, rightDepth);

  return initialDepth;
};