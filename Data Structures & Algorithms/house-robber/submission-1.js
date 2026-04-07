class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * Thinking about this we can add the current number to the previous max 
     * but NOT to wherever the previous number was added to.
     * We could have a pointer of where the last number was added to?
     */
    rob(nums) {
        let maxPosition = nums.length
        if (maxPosition == 1) return nums[0]
        if (maxPosition == 2) return Math.max(nums[0], nums[1])

        let dp = [nums[0], Math.max(nums[0],nums[1])]
        let i = 2
        while (i + 1 <= maxPosition) {
            let temp = dp[1]
            dp[1] = Math.max(dp[0] + nums[i], dp[1])
            dp[0] = temp
            console.log(i, dp)
            i++
        }
        return dp[1]
    }
}
