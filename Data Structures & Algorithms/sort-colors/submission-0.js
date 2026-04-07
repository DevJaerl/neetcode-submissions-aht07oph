class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let length = nums.length
        let partnerArray = [0, 0, 0]
        for (let i = 0; i < length; i++) {
            partnerArray[nums[i]] += 1
        }

        //for each position in partnerArray Count
        //replace the value with the number from partnerArray
        let a = partnerArray[0]
        let b = partnerArray[1]
        let c = partnerArray[2]

        console.log(a,b,c)
        for (let i=0; i<length; i++){
            if (i<a){
                nums[i]=0
            }
            else if (i<b+a){ // We do not need to define the lower bound since the elseif is chained to the if and the if computes first
                nums[i]=1
            }
            else{
                nums[i]=2
            }
        }
    }
}
