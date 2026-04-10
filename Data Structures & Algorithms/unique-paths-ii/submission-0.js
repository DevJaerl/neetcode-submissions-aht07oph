class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     * Instinct wants to use depth first search 
     * since we are in the 2d dp section though lets check this out
     * Like if grid [position][position] = 1 
     * paths through currentRow[position][position] = 0
     * 
     */
    uniquePathsWithObstacles(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let maxRow = rows - 1
        let maxCol = cols - 1
        if (grid[0][0] == 1 || grid[maxRow][maxCol] == 1) return 0
        let prevRow = new Array(cols).fill(0)

        for (let i = maxRow; i >= 0; i--) {
            let currentRow = new Array(cols).fill(0)
            if (grid[i][maxCol] == 0) {
                if (i == maxRow) { currentRow[maxCol] = 1 }
                else {
                    currentRow[maxCol] = prevRow[maxCol]
                    // In the case where there is no path straight down we can get the correct count update
                }
            }
            for (let j = maxCol - 1; j >= 0; j--) {
                currentRow[j] = currentRow[j + 1] + prevRow[j]
                if (grid[i][j] == 1) currentRow[j] = 0
            }
            prevRow = currentRow
        }
        return prevRow[0]
    }
}
