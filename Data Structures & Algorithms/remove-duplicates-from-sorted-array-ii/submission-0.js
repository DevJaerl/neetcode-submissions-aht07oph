class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * At most two of the same number in a row
     */
    removeDuplicates(nums) {
        if (nums.length <= 2) return nums.length;
        let L = 0;
        let arrLength = nums.length;

        for (let R = 1; R < arrLength; R++) { 
            //^ We use arrLength here as it changes dynamically as we adjust the array size
            if (nums[L] == nums[R]) {
                console.log("!!!!!!!!!!!!!!!!!!!");
                while (R+1<arrLength && nums[R] == nums[R + 1]) {
                    this.removeFromMiddle(nums, R + 1, arrLength);
                    arrLength--;
                }
            }
            L = R; // Every time L does not equal R we need to advance L, R will advance with the for loop.
        }

        return arrLength;
    }

    removeFromMiddle(arr, i, length) {
        for (let index = i + 1; index < length; index++) {
            arr[index - 1] = arr[index];
        }
    }
}
