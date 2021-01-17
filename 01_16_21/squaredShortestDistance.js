// Time and Space complexity
// O(n^2) time and O(m) space, where n is the number of molecules and m is the
// number of unique coordinates
var squaredShortestDistance = function (num, positionX, positionY) {
  // the minimum Squared Euclidian Distance, Initial value is Infinity
  let minSquaredEuclidianDistance = Infinity;
  // a set with the visited positions
  let visited = new Set();

  // find each pair of molecules and for each pair...
  for (let i = 0; i < positionX.length; i++) {
    // molecule A
    let moleculeA = [positionX[i], positionY[i]];

    // remember this position
    visited.add(`${positionX[i]},${positionY[i]}`);

    for (let j = i + 1; j < positionY.length; j++) {
      // molecule B
      let moleculeB = [positionX[j], positionY[j]];

      // if this position has not been visited, the positions are different, so
      if (!visited.has(`${positionX[j]},${positionY[j]}`)) {
        // calculate the squared euclidian distance
        let squaredEuclidianDistance =
          (moleculeB[0] - moleculeA[0]) ** 2 +
          (moleculeB[1] - moleculeA[1]) ** 2;

        // if it is smaller than the minimum squared euclidian distance registered...
        if (squaredEuclidianDistance < minSquaredEuclidianDistance) {
          // ...update the minimum squared euclidian distance registered to this value
          minSquaredEuclidianDistance = squaredEuclidianDistance;
        }
        // otherwise, it is bigger. So do not update
      }
    }
  }

  // return the minimum squared euclidian distance registered
  return minSquaredEuclidianDistance;
};

console.log(squaredShortestDistance(3, [0, 1, 2], [0, 1, 4])); // 2
console.log(squaredShortestDistance(3, [0, 1, 0], [0, 3, 0])); // 10