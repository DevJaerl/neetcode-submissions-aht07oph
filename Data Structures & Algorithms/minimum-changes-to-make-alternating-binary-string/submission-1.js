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
        console.log(count, length - count);
        return Math.min(count, length - count);
    }
}
