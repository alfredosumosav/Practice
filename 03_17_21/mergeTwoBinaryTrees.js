// https://leetcode.com/problems/merge-two-binary-trees/
// O(2^n) time and O(n) space where n is the largest depth between the nodes
var mergeTrees = function (root1, root2) {
  // if one of the nodes is null, return the other
  if (!root1 || !root2) {
    return root1 || root2;
  }

  // if both nodes exist, add their values
  root1.val += root2.val;

  // recursively merge left and right subtree of both nodes
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  // return the merged node
  return root1;
};