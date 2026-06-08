class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Numbers' values in == or increasing order
        //Return INDICIES of numbers that sum to target ONE INDEXED!!
        //Since there will ALWAYS be a valid solution no need to ever return null
        //Cannot use the same element/index twice
        //(Optimization might use binary search to try to find one or another pointer location. 
        // Current solution would be O(N))

        let L = 0, R=nums.length-1
        while (L<R){
            if (nums[L]+nums[R]>target){
                R--
            } else if (nums[L]+nums[R]<target){
                L++
            }else{
                return [L+1,R+1]
            }
        }

    }
}
