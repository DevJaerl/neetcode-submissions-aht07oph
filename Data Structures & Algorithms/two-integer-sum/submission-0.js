class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let dictionary = {}
        let answer = []

        for (let i in nums) {
            if (dictionary.hasOwnProperty(target - nums[i])) {

                answer.push(Math.min(dictionary[target - nums[i]], i))
                answer.push(Math.max(dictionary[target - nums[i]], i))
                return answer
            } else {

                dictionary[nums[i]] = i
            }
        }
    }
}
