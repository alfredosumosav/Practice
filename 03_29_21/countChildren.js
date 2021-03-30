class TreeNode {
  constructor(value = null, children = []) {
    this.val = value;
    this.children = children;
  }
}

function countChildren(root) {
  // If there are no children elements, return 0
  if (root.children.length === 0) return 0;

  // recursively count each child's children
  let totalCount = 0;
  root.children.forEach(child => {
    const childCount = countChildren(child);
    totalCount = totalCount + childCount + 1;
  });

  // return the total number of nodes under root
  return totalCount;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);

node1.children.push(node2, node3);
node2.children.push(node4, node5);
node3.children.push(node6, node7);
node7.children.push(node8);


console.log(countChildren(node1)); // 7