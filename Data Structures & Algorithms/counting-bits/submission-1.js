class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let arr = [0]
        if (n == 0) return arr

        for (let i = 1; i <= n; i++) {
            let count = 0
            let temp = i
            while (i > 0) {
                if (i & 1) count += 1
                i = i >> 1
            }
            arr.push(count)
            i = temp
        }
        return arr
    }
}
