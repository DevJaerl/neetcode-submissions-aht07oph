class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set()
        let L = 0
        for(let R = 0; R<nums.length; R++){
            if (Math.abs(R-L)>k){
                set.delete(nums[L])
                L++
            }
            if (set.has(nums[R])){
                return true
            }
            set.add(nums[R])
            console.log(set.has(1))
        }
        return false
    }
}
