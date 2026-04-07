class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // The next value is always equal or higher than current value.
        let k = nums.length

        // Here we will use a while loop instead of a for loop 
        // Because the values of both i and k will be changing.
        let i = 0
        while (i<k-1){ //This means we will stop 
        //at the second to last item in the array while comparing values
            if (nums[i] == nums[i+1]){
                this.removeMiddle(nums,i,k)
                i--
                k--
            }
            i++
        }

        return k
    }

    removeMiddle(arr, i, length) {
        for (let index = i + 1; index < length; index++) {
            arr[index - 1] = arr[index]
        }
    }
}
