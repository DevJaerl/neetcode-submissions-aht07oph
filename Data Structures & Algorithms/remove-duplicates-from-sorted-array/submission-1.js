class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let length = nums.length-1
        let current = 0

        while (current<length){
            if (nums[current] == nums[current+1]){
                this.removeMiddle(nums,current+1, length+1) 
                //Removing the duplicate in position current+1, length is 1 indexed here
                current-- //Backtrack to recheck i just in case there are multiple duplicates in a row
                length-- // Decrement overall length since we removed something.
            }
            current++
        }
        return length+1 
        // length is 0 indexed for the last position in the array. The returned COUNT needs to be 1 indexed!
    }

    removeMiddle(arr, i, length) {
        for (let index = i + 1; index < length; index++) {
            arr[index - 1] = arr[index];
        }
    }
}
