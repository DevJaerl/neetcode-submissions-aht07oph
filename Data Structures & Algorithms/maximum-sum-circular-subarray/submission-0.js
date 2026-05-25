class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let currentMin = 0;
        let currentMax = 0;
        let totalSum = 0;
        let maxSum = nums[0];
        let minSum = nums[0];

        for (let item of nums) {
            currentMax = Math.max(currentMax, 0) + item;
            maxSum = Math.max(currentMax, maxSum);
            currentMin = Math.min(currentMin, 0) + item;
            minSum = Math.min(currentMin, minSum);
            totalSum += item;
        }
        if (minSum == totalSum) return maxSum;
        return Math.max(totalSum - minSum, maxSum);
    }
}
