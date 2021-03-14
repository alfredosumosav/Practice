/*
function minimizeCost(numPeople, x, y) {
  // o(n)
  let xAxis = Math.max(...x);
  let yAxis = Math.max(...y);
  let minCost = Infinity;

  // o(n^3)
  for (let i = 0; i <= xAxis; i++) {
    for (let j = 0; j <= yAxis; j++) {
      let currCost = 0;
      // para cada ciudad calcular el costo total
      let cityLoc = [i, j];
      for (let k = 0; k < numPeople.length; k++) {
        currCost += numPeople[k] * (Math.abs(x[k] - cityLoc[0]) + Math.abs(y[k] - cityLoc[1]));
      }
      minCost = Math.min(minCost, currCost);
      console.log(i, j, minCost, currCost);
      if (i === Math.floor(xAxis / 2)) return minCost;
    }
  }

  return minCost;
}

// console.log(minimizeCost([1, 2], [1, 3], [1, 3]));
// console.log(minimizeCost([1, 1], [1, 3], [1, 1]));
// console.log(minimizeCost([1, 1], [1, 2], [1, 2]));
console.log(minimizeCost([1, 1, 1], [5, 2, 3], [3, 4, 7]));
*/

function widestGap(n, start, finish) {
  // Write your code here
  let maxGap = 0;

  for (let i = 0; i < start.length - 1; i++) {
    let car1 = [start[i], finish[i]];
    let car2 = [start[i + 1], finish[i + 1]];
    if (car2[0] > car1[1]) {
      let currentGap = gap(car1[1], car2[0]);
      maxGap = Math.max(maxGap, currentGap);
    }
  }
  // console.log()
  // return maxGap;
  if (finish[finish.length - 1] < n) {
    maxGap = Math.max(maxGap, gap(finish[finish.length - 1], n));
  }
  return maxGap;
}

function gap(end1, start2) {
  return start2 - 1 - end1;
}

// console.log(widestGap(10, [1, 2, 5, 8], [2, 2, 6, 10]));
// console.log(widestGap(10, [1, 2, 6, 6], [4, 4, 10, 8]));
console.log(widestGap(10, [3, 8], [4, 9]));