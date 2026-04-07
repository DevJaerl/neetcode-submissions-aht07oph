class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    storage = new Array(31)

    climbStairs(n) {
        if (n == 1 || n == 2) {
            this.storage[n] == n
            return n
        }
        if (this.storage[n]) return this.storage[n]
        let result = this.climbStairs(n - 1) + this.climbStairs(n - 2)
        this.storage[n] = result
        return result
    }


}
