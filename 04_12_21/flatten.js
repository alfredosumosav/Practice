// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/submissions/

 function TreeNode(val = 0, left = null, right = null) {
   this.val = val;
   this.left = left;
   this.right = right;
 }

function flatten(root) {
  // handle case: root = null
  if (!root) return null;
    
  // initial stack
  const stack = [root];

  let previous;
  while (stack.length) {
    // obten el ultimo valor
    const node = stack.pop();
      
    previous = node;
    
    // empuja los valores (LIFO order)
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);

    // actualiza previous a el siguiente valor en el stack
    previous.right = stack.length ? stack[stack.length - 1] : null;
    previous.left = null;
  }

  return root;
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.right = node6;

console.log(flatten(node1)); // 1->2->3->4->5->6