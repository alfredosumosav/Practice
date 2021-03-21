function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var inorderTraversal = function (root, numbers = []) {
  if (!root) return [];

  root.left ? numbers.push(...inorderTraversal(root.left)) : null;
  numbers.push(root.val);
  root.right ? numbers.push(...inorderTraversal(root.right)) : null;

  return numbers;
};

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
node1.right = node2;
node2.left = node3;

console.log(inorderTraversal(node1)); // [1,3,2]

let node4 = null;

console.log(inorderTraversal(node4)); // []

let node5 = new TreeNode(1);

console.log(inorderTraversal(node5)); // [1]

let node6 = new TreeNode(1);
let node7 = new TreeNode(2);
node6.left = node7;

console.log(inorderTraversal(node6)); // [2,1]

let node8 = new TreeNode(1);
let node9 = new TreeNode(2);
node8.right = node9;

console.log(inorderTraversal(node8)); // [1,2]