class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let maxRow = rows - 1
        let maxCol = cols - 1

        if (grid[0][0] == 1 || grid[maxRow][maxCol] == 1) return -1
        //This is the edge case for whether either of the two corners have a value of 1

        let queue = []
        let visited = new Array(rows).fill().map(() => new Array(cols).fill(0))

        queue.push([0, 0])
        visited[0][0] = 1

        let length = 1 // Because we want to include all numbers in the horizontal

        while (queue.length > 0) {
            let levelLength = queue.length
            for (let i = 0; i < levelLength; i++) {
                let position = queue.shift()
                let r = position[0]
                let c = position[1]

                //FIRST Case to try is solution case
                if (r == maxRow && c == maxCol) {
                    return length
                }

                //If we are not where we need to be we build the neighbors
                let neighbors = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1], [r + 1, c + 1], [r - 1, c - 1], [r + 1, c - 1], [r - 1, c + 1]]
                for (let j = 0; j < 8; j++) {
                    let newRow = neighbors[j][0]
                    let newCol = neighbors[j][1]

                    if (Math.min(newRow, newCol) < 0 || newRow == rows || newCol == cols ||
                        visited[newRow][newCol] == 1 || grid[newRow][newCol] == 1) {
                        continue
                    }
                    queue.push([newRow, newCol])
                    visited[newRow][newCol] = 1 // As mentioned we increment the visitedArray here
                }
            }
            length++
        }
        return -1
    }
}
