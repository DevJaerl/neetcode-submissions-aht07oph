class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     *
     */
    longestCommonSubsequence(text1, text2) {
        let rows = text1.length;
        let cols = text2.length;
        let prevRow = new Array(cols + 1).fill(0);
        // new Array(cols).fill(0)  fills 6 indices aka 0-5 as expected.
        // Needed an extra for J+1 prevRow logic to stay in bounds.
        console.log(text2, cols, prevRow);
        for (let i = rows - 1; i >= 0; i--) {
            let currentRow = new Array(cols + 1).fill(0);
            for (let j = cols - 1; j >= 0; j--) {
                if (text1[i] == text2[j]) {
                    currentRow[j] = prevRow[j + 1] + 1; //This way we diagonally add one if the values match.
                    //No need to increment the functions that will happen automatically.
                } else {
                    //If not we take the MAX path from the items lower or to the right.
                    currentRow[j] = Math.max(prevRow[j], currentRow[j + 1]);
                }
            }
            prevRow = currentRow;
        }
        return prevRow[0] || 0;
    }
}
