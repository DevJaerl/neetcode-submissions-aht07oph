class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        if (nums.length == 1) return 0;
        let leftSum = new Array(nums.length).fill(0);
        let rightSum = new Array(nums.length).fill(0);

        leftSum[1] = nums[0];
        rightSum[nums.length - 2] = nums[nums.length - 1];
        for (let i = 2; i < nums.length; i++) {
            leftSum[i]=leftSum[i-1]+nums[i-1]
        }

        for (let i = nums.length - 3; i > -1; i--) {
            rightSum[i]= rightSum[i+1]+nums[i+1]
        }
        console.log(leftSum)
        console.log(rightSum)
        for (let i = 0; i < nums.length; i++) {
            if (leftSum[i] == rightSum[i]) return i;
        }

        return -1;
    }
}
