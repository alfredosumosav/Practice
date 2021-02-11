// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(n) space
function branchSums(root) {
  let sum = [];
  calculateBranchSum(root, 0, sum);
  return sum;
}

function calculateBranchSum(node, runningSum, sum) {
  if (node === null) return;

  let newRunningSum = runningSum + node.value;
  if (node.left === null && node.right === null) {
    sum.push(newRunningSum);
    return;
  } else {
    calculateBranchSum(node.left, newRunningSum, sum);
    calculateBranchSum(node.right, newRunningSum, sum);
  }
}