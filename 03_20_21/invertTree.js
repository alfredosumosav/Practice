// https://leetcode.com/problems/invert-binary-tree/submissions/

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

// Time and space complexity analysis
// O(2^n) time and O(n) space
var invertTree = function (root) {
  if (!root) return null;

  let left = root.right ? root.right : null;
  let right = root.left ? root.left : null;

  root.left = left;
  root.right = right;
  
  invertTree(left);
  invertTree(right);

  return root;
};

let node1 = new TreeNode(2);
let node2 = new TreeNode(1);
let node3 = new TreeNode(3);
node1.left = node2;
node1.right = node3;

let node4 = new TreeNode(4);
let node5 = new TreeNode(2);
let node6 = new TreeNode(7);
let node7 = new TreeNode(1);
let node8 = new TreeNode(3);
let node9 = new TreeNode(6);
let node10 = new TreeNode(9);
node4.left = node5;
node4.right = node6;
node5.left = node7;
node5.right = node8;
node6.left = node9;
node6.right = node10;

// console.log(invertTree(node1));
// console.log(invertTree(node4));