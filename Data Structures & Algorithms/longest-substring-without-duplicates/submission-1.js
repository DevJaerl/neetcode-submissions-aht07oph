class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let arr = s.split("");
        let length = 0;
        let set = new Set();
        let L = 0;

        for (let R = 0; R < arr.length; R++) {
            while (set.has(arr[R])) {
                set.delete(arr[L]);
                L++;
            }
            set.add(arr[R]);
            length = Math.max(length, R - L+1);
        }

        return length;
    }
}
