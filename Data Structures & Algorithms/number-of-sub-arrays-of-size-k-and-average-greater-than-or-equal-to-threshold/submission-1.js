class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(nums, windowSize, threshold) {
        let count = 0;
        let L = 0;
        let sum = 0;


        for (let i = 0; i < windowSize-1; i++) {
            sum += nums[i];
        }//This sums everything from the first to k-1th element

        for (let R = windowSize-1; R < nums.length; R++) {
            sum+=nums[R]
            let avg = sum / windowSize;
            if (avg >= threshold) count++;
            sum -= nums[L];
            L++;
        }//This adds the kth element to the sum, does the check, then removes the first element
        //Since the first for loop goes LESS THAN the k-1th element, this one STARTS WITH adding 
        //the k-1th element since arrays are 0 indexed.
        return count;
    }
}
