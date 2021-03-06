/*
A Mars rover is directed to move within a square matrix.It accepts a sequence of
commands to move in any of the four directions 
from each cell: [UP, DOWN, LEFT or RIGHT].The rover starts from cell 0. and may 
not move diagonally or outside of the boundary.

Each cell in the matrix has a position equal to:
(row * size) + column
where row and column are zero-indexed, size = row length of the matrix.

Return the final position of the rover after all moves.

Example
n = 4
commands = [RIGHT, UP, DOWN, LEFT, DOWN, DOWN]

The rover path is shown below.

0 1 2 3
4 5 6 7
8 9 10 11
12 13 14 15

RIGHT: Rover moves to position 1
UP: Position unchanged, as the move would take the rover out of the boundary.
DOWN: Rover moves to Position 5.
LEFT: Rover moves to position 4
DOWN: Rover moves to position 8
DOWN: The rover ends up in position 12.

The function returns 12.

Function Description
Complete the function roverMove in the editor below.
roverMove has the following parameter(s):
int n: the size of the square matrix
string cmds[m]: the commands

Returns
int: the label of the cell the rover occupies after executing all commands

Constraints
2 <= n <= 20
1 <= |cmds| <= 20

Input Format For Custom Testing

Input from stdin will be processed as follows and passed to the function.
The first line contains an integer, n, denoting the size of the square matrix.
The next line contains an integer, m, the number of commands to follow.
Each of the next m lines contains a command string, cmds[i].

Sample Input :
STDIN Function

4 → n = 4
5 → cmds [] size m = 5
RIGHT → cmds = ['RIGHT', 'DOWN', 'LEFT', 'LEFT', 'DOWN']
DOWN
LEFT
LEFT
DOWN

Sample Output:
8

Explanation:
0 1 2 3
4 5 6 7
8 9 10 11
12 13 14 15
Rover starts at position 0
RIGHT → pos 1
DOWN → pos 5
LEFT → pos 4
LEFT → pos 4, No effect
DOWN → pos 8
*/

// Time and Space complexity
// O(n) time and O(1) space, where n is the # of commands received
var roverMove = function (n, cmds) {
  // track x, y for position
  let x = 0;
  let y = 0;

  // loop through the cmds array and for each cmd...
  for (let i = 0; i < cmds.length; i++) {
    // command
    let cmd = cmds[i];

    // next move
    let nextMove = validMove(n, x, y, cmd);

    // is valid movement...
    if (nextMove[0] !== -1) {
      // update the position
      x = nextMove[0];
      y = nextMove[1];
    }
  }

  // return the result, using the given formula
  return ((x * n) + y);
}

function validMove(n, x, y, cmd) {
  // valid movements
  const CMDS = {
    'UP': [-1, 0],
    'DOWN': [1, 0],
    'LEFT': [0, -1],
    'RIGHT': [0, 1],
  };

  // is not a valid movement
  if (CMDS[cmd] === undefined) return [-1, -1];

  // movement direction
  let move = CMDS[cmd];

  // new row and column
  let row = x + move[0];
  let col = y + move[1];

  // if it is out of the matrix boundaries, it is not valid
  if (row < 0 || row >= n || col < 0 || col >= n) return [-1, -1];

  // it is inside the matrix and is valid
  return [row,col];
}

console.log(roverMove(4, ['RIGHT', 'UP', 'DOWN', 'LEFT', 'DOWN', 'DOWN'])); // 12
console.log(roverMove(4, ['RIGHT', 'DOWN', 'LEFT', 'LEFT', 'DOWN'])); // 8