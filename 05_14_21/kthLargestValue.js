// o(n) time O(n) space
function kthLargestValue(tree, k) {

    const nodes = traverseBST(tree);

    return Nodes[nodes.length - k];
}

function traverseBST(root, nodes = []) {
    if (!root) return;

    if (root.left) traverseBST(root.left, nodes);
    nodes.push(root.value)
    if (root.right) traverseBST(root.right, nodes)

    return nodes;
}
