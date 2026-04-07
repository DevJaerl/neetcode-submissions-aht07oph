class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let answers = []

        function dfs(position, currentSum, potentialArray) {
            for (let i = position; i < nums.length; i++) {
                let temp = nums[i]
                let newSum = currentSum + temp
                if (newSum > target) continue
                // this also catches if temp>target and if currentSum>target
                // Also by doing continue instead of return we can check other potential values
                // instead of stopping the loop for i at this position with other values.

                potentialArray.push(temp)

                if (newSum == target) {
                    answers.push([...potentialArray])
                }

                //else case is newSum <target
                dfs(i, newSum, potentialArray)
                
                potentialArray.pop()
            }

        }

        dfs(0, 0, [])

        return answers
    }
}
