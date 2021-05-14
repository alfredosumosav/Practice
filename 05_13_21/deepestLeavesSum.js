// https://leetcode.com/problems/deepest-leaves-sum/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


// Time and Space complexity analysis
// O(n) time and O(n) space, where n is the number of nodes in the tree
var deepestLeavesSum = function (root, h = 0, sum = 0) {

  // if input is empty, return 0
  if (!root) return 0;

  // the max depth of the tree
  let maxDepth = -Infinity;

  // find the deepest level of the tree
  const stack = [[root, 1]];
  while (stack.length) { // []

    // grab the next node, then if the right child exists, add
    // it to the stack. Likewise with the left child.
    const [node, nodeHeight] = stack.pop();
    if (node.right) stack.push([node.right, nodeHeight + 1]);
    if (node.left) stack.push([node.left, nodeHeight + 1]);

    // if the current node is a leaf node, then if the depth id higher than the
    // maxDepth stored, update maxDepth to this value
    if ((!node.left && !node.right)) maxDepth = Math.max(maxDepth, nodeHeight);
  }

  // traverse the tree using DFS and when a node is at the deepest level, add
  // its value to running sum
  stack.push([root, 1]);
  while (stack.length) {

    // grab the next node value and height, then if the right child exists, add
    // it to the stack with its height. Likewise with the left child.
    const [node, nodeHeight] = stack.pop();
    if (node.right) stack.push([node.right, nodeHeight + 1]);
    if (node.left) stack.push([node.left, nodeHeight + 1]);

    // if current node is in the deepest level, add it to the sum.
    if (nodeHeight === maxDepth) sum += node.val;
  }

  return sum;
}

const r1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);
const n7 = new TreeNode(7);
const n8 = new TreeNode(8);

r1.left = n2;
r1.right = n3;
n2.left = n4;
n2.right = n5;
n4.left = n7;
n3.right = n6;
n6.right = n8;

console.log(deepestLeavesSum(r1)); // 15

const r2 = new TreeNode(6);
const a = new TreeNode(7);
const b = new TreeNode(8);
const c = new TreeNode(2);
const d = new TreeNode(7);
const e = new TreeNode(1);
const f = new TreeNode(3);
const g = new TreeNode(9);
const h = null;
const i = new TreeNode(1);
const j = new TreeNode(4);
const k = null;
const l = null;
const m = null;
const n = new TreeNode(5);

r2.left = a;
r2.right = b;
a.left = c;
a.right = d;
b.left = e;
b.right = f;
c.left = g;
d.left = i;
d.right = j;
f.right = n;

console.log(deepestLeavesSum(r2)); // 19
console.log(deepestLeavesSum(null)); // 0