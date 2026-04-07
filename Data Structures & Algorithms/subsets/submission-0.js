class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let answer = [[]]

        function dfs(index, currentArray) {
            for (let i = index; i < nums.length; i++) {
                currentArray.push(nums[i])
                answer.push([...currentArray]) 
                //^ ie. push in the subarray we just updated 
                //before making any changes
                // MUST do the ...currentArray to get ALL VALUES
                
                dfs(i+1, currentArray)
                currentArray.pop() 
                //remove the current value before we increment the for loop

            }
        }

        dfs(0, [])
        return answer
    }
}
