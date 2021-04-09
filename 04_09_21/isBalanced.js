function isBalanced(treeRoot) {

  // a tree with no nodes is superbalanced, since there are no leafs!
  if (!treeRoot) return true;
  
  const depths = []; // we short-circuit as soon as we find more than 2
  
  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);
  
  while (nodes.length) {
    
    // pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];
    console.log(node)
    if (!node.left && !node.right) {
      
      // case: we found a leaf
      // we only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
        
        // two ways we might now have an unbalanced tree:
        //  1) More than 2 different leaf depths
        //  2) 2 leaf depths that are more than 1 apart
        if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) return false;
      }
    } else {
      
      // case: this isn't a leaf - keep stepping down
      if (node.left) nodes.push([nodes.left, depth + 1]);
      if (node.right) nodes.push([nodes.right, depth + 1]);
    }
  }

  return true;
}