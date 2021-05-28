var minPathSum = function(grid) {
  let table = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(Infinity));
  table[0][0] = grid[0][0];

  for (let i = 0; i < grid.length; i++) {

      for (let j = 0; j < grid[0].length; j++) {

          if (j < grid[0].length - 1) table[i][j + 1] = Math.min(table[i][j + 1], table[i][j] + grid[i][j + 1]);
          if (i < grid.length - 1) table[i + 1][j] = Math.min(table[i + 1][j], table[i][j] + grid[i + 1][j]);
      }
  }

  return table[table.length - 1][table[0].length - 1]
};