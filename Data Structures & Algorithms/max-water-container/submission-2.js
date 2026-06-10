class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(nums) {
        let max = 0;
        let L = 0;
        let R = nums.length - 1;
        while (R > L) {
            let currentVolume = (R - L) * Math.min(nums[L], nums[R]);
            max = Math.max(max, currentVolume);
            if (nums[R] > nums[L]) {
                L++;
            } else {
                R--;
            }
        }
        return max;
    }
}
