class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let answer = [[]]

        function dfs(position, partialArray){
            for (let i=position; i<nums.length; i++){
                partialArray.push(nums[i])
                answer.push([...partialArray]) 
                // This syntax is needed to push arrays into arrays etc.

                dfs(i+1, partialArray)

                partialArray.pop()

            }
        }

        dfs(0,[])

        return answer
    }
}
