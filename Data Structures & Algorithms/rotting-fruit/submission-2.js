class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     * Restated - How far away is the farthest item from a rotten item in layers?
     * Assuming there is always a rotten fruit?
     * 
     * What is our approach? 
     * go through the rows and columns. HORIZONTALLY AND VERTICALLY ONLY 
     * If we encounter a rotten fruit put its location into the queue. 
     * Then do bfs until all items with a 1 are returned.
     *  Suppose we should keep a count in this initial location where we identify available to rot bananas.
     */
    orangesRotting(grid) {
        let rows = grid.length
        let cols = grid[0].length
        let maxRow = rows - 1
        let maxCols = cols - 1
        let minMinutes = 0
        let goodFruit = 0
        let badFruitQueue = []
        let visited = new Array(rows).fill().map(() => new Array(cols).fill(0))

        for (let v = 0; v < rows; v++) {
            for (let w = 0; w < cols; w++) {
                if (grid[v][w] == 2) {
                    badFruitQueue.push([v, w])
                    visited[v][w] = 1
                }
                if (grid[v][w] == 1) goodFruit++
            }
        }
        while (badFruitQueue.length > 0 && goodFruit> 0) {
            let contaminatedThisMinute = badFruitQueue.length
            for (let i = 0; i < contaminatedThisMinute; i++) {
                let current = badFruitQueue.shift()
                let r = current[0]
                let c = current[1]

                

                let neighbors = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]

                for (let j = 0; j < neighbors.length; j++) {
                    let newR = neighbors[j][0]
                    let newC = neighbors[j][1]
                    if (Math.min(newR, newC) < 0 || newR == rows || newC == cols ||
                        visited[newR][newC] == 1 || grid[newR][newC] == 0) continue
                    //In the case the value of an item is 0 it cannot be contaminated 
                    //so we bypass this location

                    badFruitQueue.push([newR, newC])
                    visited[newR][newC] = 1
                    goodFruit--

                }
            }
            minMinutes += 1
        }



        if (goodFruit > 0) {
            console.log(goodFruit, minMinutes)
            return -1
        }
        return minMinutes
    }
}
