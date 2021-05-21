// https://leetcode.com/problems/find-center-of-star-graph

// Time and space complexity analysis
// O(1) time and O(1) space
var findCenter = function (edges) {

  // take 2 edges and find the common node
  // the common node is the center of the star graph
  const edge = new Set(edges[0]);
  return set.has(edges[1][0]) ? edges[1][0] : edges[1][1];
}

console.log(findCenter([[1,2], [2,3], [4,2]])); // 2
console.log(findCenter([[1,2], [5,1], [1,3], [1, 4]])); // 1