class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = new Array()
        let total = 0
        for (let item of nums){
            total += item
            this.prefix.push(total)
        }
        console.log(this.prefix)
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let rightSum = this.prefix[right]
        let leftSum = this.prefix[left]
        let prefix = left>0?this.prefix[left-1]: 0
        return (rightSum-prefix)
    }
}
