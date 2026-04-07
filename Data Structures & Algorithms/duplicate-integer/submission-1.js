class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map ()

        for (let i = 0; i<nums.length; i++){
            console.log(nums[i])
            console.log(map.entries())
            if (map.has(nums[i])) return true

            map.set(nums[i], true)
        }

        return false
    }
}
