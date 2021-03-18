// Assume we have an efficient queue implementation, Queue()
// with enqueue and dequeue methods and a size property

function bfs(graph, startNode, endNode) {
  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  // Keep track of what nodes we've already seen
  // so we don't process them twice
  const nodesAlreadySeen = new Set([startNode]);

  while (nodesToVisit.size > 0) {
    const currentNode = nodesToVisit.dequeue();

    // Stop when we reach the end node
    if (currentNode === endNode) {
      // Found it!
      break;
    }

    graph[currentNode].forEach((neighbor) => {
      if (!nodesAlreadySeen.has(neighbor)) {
        nodesAlreadySeen.add(neighbor);
        nodesToVisit.enqueue(neighbor);
      }
    });
  }
}
