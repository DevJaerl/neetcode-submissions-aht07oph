class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0]
        let currentSum = 0

        for (let item of nums){
            currentSum = Math.max(currentSum, 0)
            currentSum += item
            maxSum = Math.max(currentSum, maxSum)
        }
        return maxSum
    }
}
