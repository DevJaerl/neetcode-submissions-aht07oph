class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(rows, cols) {
        let previousRow = new Array(cols).fill(0)
        for (let i = rows - 1; i >= 0; i--) {
            //Start at the end and work backwards.
            //Remember, second MUST have comparer even if >=
            let currentRow = new Array(cols).fill(0)

            currentRow[cols - 1] = 1
            // Every time we move up a row from the rightmost place there is 
            //one more way to get to the target

            for (let j = cols - 2; j >= 0; j--) {
                currentRow[j] = currentRow[j + 1] + previousRow[j]
            }
            previousRow = currentRow

        }
        return previousRow[0] // This is where we have completed all rows
        //so this is the leftmost and last position in the array
    }
}
