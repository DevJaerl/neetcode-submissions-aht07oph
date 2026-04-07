class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n == 1) return 1
        if (n == 2) return 2

        let dp = [1,2]
        let i = 3
        while (i<=n){
            let temp = dp[1]
            dp[1] = dp[0]+dp[1]
            dp[0]=temp
            i++
        }
        return dp[1]
    }
}
