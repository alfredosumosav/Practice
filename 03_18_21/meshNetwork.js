// Assume we have an efficient queue implementation, Queue()
// with enqueue and dequeue methods and a size property

function bfsGetPath(graph, startNode, endNode) {
  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  // Keep track of what nodes we've already seen
  // so we don't process them twice
  const nodesAlreadySeen = new Set([startNode]);

  // Keep track of how we got to each node
  // we'll use this to reconstruct the shortest path at the end
  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while (nodesToVisit.size > 0) {
    const currentNode = nodesToVisit.dequeue();

    // Stop when we reach the end node
    if (currentNode === endNode) {
      // Somehow reconstruct the path here
      return path;
    }

    graph[currentNode].forEach((neighbor) => {
      if (!nodesAlreadySeen.has(neighbor)) {
        nodesAlreadySeen.add(neighbor);
        nodesToVisit.enqueue(neighbor);

        // Keep track of how we got to this node
        howWeReachedNodes[neighbor] = currentNode;
      }
    });
  }
}
