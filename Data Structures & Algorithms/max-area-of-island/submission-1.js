class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let maxCount = 0
        let gridCopy = []

        for (let i = 0; i < rows; i++) {
            gridCopy.push([...grid[i]])
        }

        //gridCopy is what will be sent into this function
        function dfs(localGrid, r, c) {
            if (Math.min(r, c) < 0 || r == rows || c == cols || localGrid[r][c] == 0) return 0
            //The only option is for an item with 1 as a value
            localGrid[r][c] = 0
            let islandSize = 1

            islandSize += dfs(localGrid, r + 1, c)
            islandSize += dfs(localGrid, r - 1, c)
            islandSize += dfs(localGrid, r, c + 1)
            islandSize += dfs(localGrid, r, c - 1)
            

            return islandSize
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (gridCopy[i][j] == 1) {
                    let currentMax = dfs(gridCopy, i, j)
                    maxCount = Math.max(maxCount, currentMax)
                }
            }
        }

        return maxCount
    }
}
