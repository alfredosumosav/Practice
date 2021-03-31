function findRangeOverlap(x1, length1, x2, length2) {
  // find the highest start point and lowest end point.
  // the highest ("rightmos" or "upmost") start point is the start point of
  // the overlap.
  // the lowest end point is the end point of the overlap.
  const highestStartPoint = Math.max(x1, x2);
  const lowestEndPoint = Math.min(x1 + length1, x2 + length2);

  // return null overlap if there is no overlap
  if (highestStartPoint >= lowestEndPoint) {
    return { startPoint: highestStartPoint, OverlapLength: lowestEndPoint };
  }

  // compute the overlap length
  const overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength: overlapLength };
}

function findRectangularOverlap(rect1, rect2) {
  // get the x and y overlap points and length
  const xOverlap = findRangeOverlap(
    rect1.leftX,
    rect1.width,
    rect2.leftX,
    rect2.width
  );
  const yOverlap = findRangeOverlap(
    rect1.bottomY,
    rect1.height,
    rect2.bottomY,
    rect2.height
  );

  // Return null rectangle if there is no overlap
  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength,
  };
}

const rect1 = {
  leftX: 1,
  bottomY: 1,
  width: 6,
  height: 3
}

const rect2 = {
  leftX: 5,
  bottomY: 2,
  width: 3,
  height: 6
}

console.log(findRectangularOverlap(rect1, rect2)); // {leftX: 5, bottomY: 2, width: 2, height: 2}
