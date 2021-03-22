function deleteNode(nodeToDelete) {
  // Get the input node's next node, the one we want to skip to
  const nextNode = nodeToDelete.next;

  if (nextNode) {
    // Replace the input node's value and pointer with the next
    // node's value and pointer. The previous node now effectively
    // skips over the input node
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next = nextNode.next;
  } else {
    // Eep, we're trying to delete the last node!
    throw new Error("Can't delete the last node with this technique!");
  }
}