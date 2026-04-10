class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let answer = 0
        for (let i = 0; i < 32; i++) {
            let temp = (n >> i) & 1
            answer = answer | (temp << (31 - i))
        }
        return answer >>> 0
    }
}
