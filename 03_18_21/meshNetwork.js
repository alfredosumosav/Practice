// Time and space complexity
// O(N + M) time where N is the number of nodes in the graph and M is the number
  // of crossings from the endNode to startNode
// O(N) space where N is the number of nodes in the graph

// Assume we have an efficient queue implementation, Queue()
// with enqueue and dequeue methods and a size property

function reconstructPath(howWeReachedNodes, startNode, endNode) {
  const reversedShortestPath = [];

  // Start from the end of the path and work backwards
  let currentNode = endNode;

  while (currentNode !== null) {
    reversedShortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }

  // Reverse our path to get the right order
  return reversedShortestPath.reverse(); // No longer reversed
}

function bfsGetPath(graph, startNode, endNode) {
  if (!graph.hasOwnProperty(startNode)) {
    throw new Error("Start node not in graph!");
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw new Error("End node not in graph!");
  }

  const nodesToVisit = new Queue();
  nodesToVisit.enqueue(startNode);

  // Keep track of how we got to each node
  // We'll use this to reconstruct the shortest path at the end
  // We'll ALSO use this to keep track of which nodes we've
  // already visited
  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while (nodesToVisit.size > 0) {
    const currentNode = nodesToVisit.dequeue();

    // Stop when we reach the end node
    if (currentNode === endNode) {
      return reconstructPath(howWeReachedNodes, startNode, endNode);
    }

    graph[currentNode].forEach((neighbor) => {
      if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
        nodesToVisit.enqueue(neighbor);
        howWeReachedNodes[neighbor] = currentNode;
      }
    });
  }

  // If we get here, then we never found the end node
  // so there's NO path from startNode to endNode
  return null;
}
