class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
        let length = s.length;
        let count = 0;
        for (let i = 0; i < length; i++) {
            let expected = i % 2 == 0 ? "0" : "1"; // These numbers MUST be assigned as strings!!!
            if (s[i] !== expected) count++;
        }
        return Math.min(count, length - count);
        // Either the string should be the case where its 0101 as above or 1010 which is why we also 
        // take the inverse of the count here!
    }
}
