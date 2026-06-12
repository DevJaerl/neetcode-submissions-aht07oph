class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, target) {
        let map = new Map();
        let prefixSum = new Array(nums.length).fill(0);
        let count = 0;
        map.set(0, 1);
        let currentSum = 0

        for (let i = 0; i < nums.length; i++) {
            currentSum+=nums[i]
            prefixSum[i] = currentSum;
            if (map.has(currentSum-target)) count+=map.get(currentSum-target)
            if (map.has(currentSum)) {
                map.set(currentSum, map.get(currentSum) + 1);
            } else {
                map.set(currentSum, 1);
            }
        }
        
        return count;
    }
}
