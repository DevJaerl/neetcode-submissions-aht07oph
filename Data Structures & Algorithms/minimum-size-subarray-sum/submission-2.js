class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let length = nums.length + 1;
        let L = 0;
        let total = 0;

        for (let R = 0; R < nums.length; R++) {
            total += nums[R];
            while (total >= target) {
                length = Math.min(length, R - L + 1);
                total -= nums[L]
                L++;
            }
        }

        if ((length == nums.length + 1)) return 0;

        return length;
    }
}
