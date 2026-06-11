class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.length == 2) return nums.reverse();

        let prefix = new Array(nums.length).fill(0);
        let suffix = new Array(nums.length - 1).fill(0);
        prefix[0] = nums[0];
        suffix.push(nums[nums.length - 1]);

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i];
        }

        for (let i = nums.length - 2; i>-1; i--) {
            suffix[i] = suffix[i + 1] * nums[i];
        }

        let answer = new Array(nums.length).fill(0);
        answer[0] = suffix[1];
        answer[nums.length - 1] = prefix[nums.length - 2];

        for (let i = 1; i < nums.length - 1; i++) {
            answer[i] = prefix[i - 1] * suffix[i + 1];
        }

        return answer;
    }
}
