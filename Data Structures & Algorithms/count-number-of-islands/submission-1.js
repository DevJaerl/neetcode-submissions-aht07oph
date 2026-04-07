class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let gridCopy = []
        let count = 0

        for (let i = 0; i < rows; i++) {
            gridCopy.push([...grid[i]])
        }

        function dfs(grid, r, c) {
            if (Math.min(r, c) < 0 || r == rows || c == cols
                || grid[r][c] == "0") return 0

            grid[r][c] = "0"

            dfs(grid, r + 1, c)
            dfs(grid, r - 1, c)
            dfs(grid, r, c + 1)
            dfs(grid, r, c - 1)

            return
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (gridCopy[i][j] == "1") {
                    //This has to be consistent with being gridCopy in all places.
                    dfs(gridCopy, i,j)
                    count+=1
                }
            }
        }
        return count
    }
}
