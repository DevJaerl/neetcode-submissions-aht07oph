class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0
        let high = nums.length - 1
        let mid

        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (nums[mid] < target) {
                low = mid + 1
            }
            else if (nums[mid] > target) {
                high = mid - 1
            }
            else { //if nums[mid] == target
            return mid
            }
        }
        return -1
    }
}
