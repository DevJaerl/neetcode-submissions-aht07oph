class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        let previous = [1];
        if (rowIndex == 0) return previous;
        let answer = [] // Having the answer array out here means we can return it by keeping it outside of the looping functions!
        for (let i = 1; i < rowIndex + 1; i++) {
            // since we want to get up to tow index, and row index is 0 indexed, and we handled rowIndex == 0 above
            let currentRow = new Array(previous.length+1).fill(1)
            for (let j = 0; j<currentRow.length; j++){ 
                // If we figure out the end cases here we don't need do fancy work with several arrays
                // Also use J since we are in an INNER FOR LOOP!!!!
                if (j==0 || j==currentRow.length-1) continue
                currentRow[j] = previous[j] + previous[j-1]
            }
            answer = currentRow
            previous = currentRow
        }
        return answer
    }

    fib(number) {
        if (i == 0) return 0;
        if (i == 1) return 1;
        let dp = [0, 1];

        for (let i = 2; i < number; i++) {
            let temp = dp[1];
            dp[1] = dp[0] + dp[1];
            dp[0] = temp;
        }
    }
}
