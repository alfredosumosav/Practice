var maxAreaOfIsland = function(grid) {
    let maxCount = 0
    let visited = grid.map(row => row.map(value => false));
    for(let i =0; i < grid.length;i++){
        for(let j =0; j < grid[0].length;j++){
            if(visited[i][j] === false && grid[i][j] === 1){
                visited[i][j] = true
                let count = helper(i,j,grid,visited)
                if(count > maxCount) maxCount = count
            }
        }
    }
    return maxCount  
};
function helper(i,j,grid,visited){
    let queue = [[i,j]]
    let dirs = [[0,1],[0,-1],[1,0],[-1,0]]
    let count = 0
    while(queue.length){
        let len = queue.length
        count+= len
        for(let i =0; i < len;i++){
            let currPos = queue.shift()
            for(const dir of dirs){
                let newX = currPos[0] + dir[0]
                let newY = currPos[1] + dir[1]
                if(isValid(newX,newY,grid,visited)) queue.push([newX,newY])
            }
        } 
    }
    return count 
}
function isValid(i,j,grid,visited){
    if(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && visited[i][j] === false && grid[i][j] === 1){
        visited[i][j] = true
        return true
    }
    return false
}