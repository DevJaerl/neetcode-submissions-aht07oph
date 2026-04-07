class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let answer = []

        for (let i = 0; i <= nums.length - 3; i++) {
            for (let j = i + 1; j <= nums.length - 2; j++) {
                for (let k = j + 1; k <= nums.length - 1; k++) {
                    let one = nums[i]
                    let two = nums[j]
                    let three = nums[k]
                    if (one + two + three == 0) {
                        let temp = [one, two, three].sort()
                        answer.push(temp)
                    }
                }

            }
        }
        let setArray = []
        answer.sort()
        for (let item of answer) {
            console.log(item, setArray.length)
            if (setArray.length == 0) setArray.push(item)
            if (item[0]==setArray[setArray.length-1][0]&&item[1]==setArray[setArray.length-1][1]&&item[2]==setArray[setArray.length-1][2] ) continue
            setArray.push(item)
        }
        return setArray
    }

}
