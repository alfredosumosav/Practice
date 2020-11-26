function distance(origin, point) {
  const sum = (origin[0] + point[0]) ** 2 + (origin[1] + point[1]) ** 2;
  const dis = Math.sqrt(sum);
  return dis;
}

var kClosest = function (points, K) {
  // variable for the closest points
  let closestPoints = [];

  // loop through all points and find the euclidean distance for every point, then push answer
  for (let i = 0; i < points.length; i++) {
    const dis = distance([0, 0], points[i]);
    closestPoints.push([dis, points[i]]);
  }

  // partial sort the answer (closest points)
  closestPoints = closestPoints.sort(function (a, b) {
    return a[0] - b[0];
  });

  // return the closest k elements
  closestPoints = closestPoints.slice(0, K); // [[sqrt(8), [1,3]]]
  return closestPoints.map((e) => {
    return e[1];
  });
};

function distance(origin, point) {
  const sum = (origin[0] + point[0]) ** 2 + (origin[1] + point[1]) ** 2;
  const dis = Math.sqrt(sum);
  return dis;
}

console.log(kClosest([[1, 3], [-2, 2]], 1));
console.log(kClosest([[0,1],[1,0]], 2));