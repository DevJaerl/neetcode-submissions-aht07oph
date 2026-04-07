class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //array.split(0,x) or array.split(x) <- x to end

        if (nums.length == 1) return nums[0]
        if (nums.length == 2) return Math.min(nums[0], nums[1])

        let left = 0
        let mid = Math.floor(nums.length / 2)
        let right = nums.length - 1

        if (nums[left]<nums[right])return nums[left];
        
        if (nums[mid] > nums[right]){
            let subarray = nums.slice(mid)
            return this.findMin(subarray) // Right Break Situation
        } else if (nums[left] > nums[mid]) {
            let subarray = nums.slice(0, mid+1)
            return this.findMin(subarray) // Left Break Situation 
        }
    }
}
