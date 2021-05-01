//  https://leetcode.com/problems/max-increase-to-keep-city-skyline

 var maxIncreaseKeepingSkyline = function(grid) {
  const maxRowHeights = [];
  const maxColumnHeights = [];
  let totalHeights = 0;
  let maxHeightSoFar;

  // find the max heights of every row
  for (let i = 0; i < grid.length; i++) {
      maxHeightSoFar = 0; // reset max height

      for (let j = 0; j < grid[i].length; j++) {

        // if current height is greater than the maximum column height so far
        // update the this value
        if (grid[i][j] > maxHeightSoFar) maxHeightSoFar = grid[i][j];
      }

      // store the maximum heigh of the current row
      maxRowHeights.push(maxHeightSoFar);
  }

  // find the max heights of every column
  for (let i = 0; i < grid[0].length; i++) {
      maxHeightSoFar = 0; // reset max height

      for( let j = 0; j < grid.length; j++) {

          // if current height is greater than the maximum column height so far
          // update the this value
          if (grid[j][i] > maxHeightSoFar) maxHeightSoFar = grid[j][i];
      }

      // store the maximum heigh of the current column
      maxColumnHeights.push(maxHeightSoFar);
  }

  // check every element in the grid
  for (let i = 0; i < grid.length; i++) {

      for (let j = 0; j < grid[i].length; j++) {

          // the minimum that a building can increase without affecting the outline
          const maxIncrease = Math.min(maxRowHeights[i], maxColumnHeights[j]);
          // add the max increase in height for each building
          totalHeights +=  Math.abs(grid[i][j] - maxIncrease);
      }
  }

  return totalHeights;
};











// check every element in the grid
  // find the max of current row
  // find max of current column
  // if the current element is not equal to the max of (maxRow and maxCol), replace with the difference between maximum of current row and column and the element
// find the total sum of the differences and return that