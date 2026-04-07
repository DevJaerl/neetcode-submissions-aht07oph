class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = nums.length

        let i = 0
        while (i<k){
            console.log(i,k)
            if (nums[i]==val){
                console.log("inner", i, nums[i],k)
                this.removeMiddle(nums, i, k)
                k--
                i-- // We do this because if the value is val then we 
                //NEED TO CHECK this position again!!
            }
            i++
        }

        return k
    }

    removeMiddle(arr,i,length){
        for (let index = i+1; index <length; index ++){
            arr[index-1]= arr[index]
        }
    }
}
