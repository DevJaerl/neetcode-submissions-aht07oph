class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) =>  a - b )
        let answer = []

        for (let i = 0; i < nums.length; i++) {
            if (nums[i]>0) break;
            if (i>0 && nums[i]===nums[i-1]) continue;

            let j = i + 1
            let k = nums.length - 1


            //console.log(one, two, three)
            while (j < k) {
            let one = nums[i]
            let two = nums[j]
            let three = nums[k]

                if (one + two + three < 0) {
                    j++
                }
                else if (one + two + three > 0) {
                    k--
                } else {
                    answer.push([one, two, three])
                    j++
                    k--
                    while (nums[j] === nums[j - 1]) { j++ }

                }
            }
        }
        return answer
    }
}
