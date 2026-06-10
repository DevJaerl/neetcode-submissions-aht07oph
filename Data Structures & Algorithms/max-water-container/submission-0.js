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
            console.log(L, R);
            let currentVolume = (R - L) * Math.min(nums[L], nums[R]);
            console.log(currentVolume);
            max = Math.max(max, currentVolume);
            if (nums[L] < nums[R]) {
                L++;
            } else {
                R--;
            }
        }
        return max;
    }
}
