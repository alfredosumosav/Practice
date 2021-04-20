
// Time and space complexity
// O(m*n) time and O(n) space, 
// where m is the number of laps (given by sprints.length - 1) 
// and n is the numer of markers (positions)
function getMostVisited(n, sprints) {
  const visitedPositions = new Array(n).fill(0);

  // for every lap
  for (let lap = 0; lap < sprints.length - 1; lap++) {
    let start = sprints[lap];
    let end = sprints[lap + 1];

    // starting position and ending position\
    if (start > end) [start, end] = [end, start];

    // increase visits by one, from start position until end position
    for (let i = start; i <= end; i++) {
      // accounting for zero indexed array...
      visitedPositions[i - 1]++;
    }
  }

  // what was the maximum number of visits done?
  const maxNumberOfVisits = Math.max(...visitedPositions);
  
  // return the first most visited position and account for zero indexed array
  return visitedPositions.indexOf(maxNumberOfVisits) + 1;
}

console.log(getMostVisited(10, [1,5,10,3])); // 5
//   1,2,3,4,5,6,7,8,9,10
// [ 1,1,2,2,3,2,2,2,2,2 ]
console.log(getMostVisited(10, [1,5,10,3,1])); // 3
//   1,2,3,4,5,6,7,8,9,10
// [ 1,1,3,2,3,2,2,2,2,2 ]