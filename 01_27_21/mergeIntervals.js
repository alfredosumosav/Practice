/*
Given an array of intervals where intervals[i] = [starti, endi], merge all 
overlapping intervals, and return an array of the non-overlapping intervals 
that cover all the intervals in the input.
*/

// O(n * log(n)) time and O(n) space
var merge = function (intervals) {
  // sort intervals in order (start_i as reference)
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let nonOverlappingIntervals = [intervals.shift()];

  // loop through intervals, until there is no more overlapping elements
  while (intervals.length) {
    // check contiguos intervals for overlaping
    let i1 = nonOverlappingIntervals.pop();
    let i2 = intervals.shift();

    // if they overlap, merge them and save into result
    if (i1[1] - i2[0] >= 0) {
      let smallestStart = Math.min(i1[0], i2[0]);
      let largestEnd = Math.max(i1[1], i2[1]);
      let merged = [smallestStart, largestEnd];
      nonOverlappingIntervals.push(merged);
    } else {
      // otherwise, they do not overlap, so push the intervals to the result
      // save them in a non-overlapping array (result)
      nonOverlappingIntervals.push(i1);
      nonOverlappingIntervals.push(i2);
    }
  }
  // return the non-overlapping interval
  return nonOverlappingIntervals;
};
