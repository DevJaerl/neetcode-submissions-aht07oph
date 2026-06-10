class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let length = heights.length;
        let tallestFromLeft = new Array(length).fill(0);
        let tallestFromRight = new Array(length).fill(0);
        let total = 0;

        tallestFromLeft[0] = heights[0]
        for (let i = 1; i < length; i++) {
            tallestFromLeft[i] = Math.max(heights[i], tallestFromLeft[i - 1]);
        }

        tallestFromRight[length-1] = heights[length-1]
        for (let i = length - 2; i > -1; i--) {
            tallestFromRight[i] = Math.max(heights[i], tallestFromRight[i + 1]);
        }

        for (let i = 0; i < length; i++) {
            let current = Math.min(tallestFromLeft[i], tallestFromRight[i]) - heights[i];
            if (current > 0) total += current;
        }
        return total;
    }
}
