class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let count = 0
        let gridCopy = []
        for (let i = 0; i < rows; i++) {
            gridCopy.push([...grid[i]])

        }

        function dfs(grid, r, c) {
            //If exclusion Base case
            if (Math.min(r, c) < 0 || r == rows || c == cols
                || grid[r][c] == '0') return 0

            grid[r][c] = '0'

            dfs(grid, r + 1, c)
            dfs(grid, r - 1, c)
            dfs(grid, r, c + 1)
            dfs(grid, r, c - 1)
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (gridCopy[i][j] == '1') {
                    count += 1
                    dfs(gridCopy, i, j)
                }
            }
        }
        return count
    }
}
