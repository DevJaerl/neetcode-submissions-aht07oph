class Solution {
    /**
     * subsets
     * @param {number[]} nums
     * @return {number[][]}
     * 
     * dfs(i position, partialArray)
     */
    subsets(nums) {
        let answer = [[]]

        function dfs(position, partialArray){
            for(let i=position; i<nums.length; i++){
                partialArray.push(nums[i])
                answer.push([...partialArray])
                dfs(i+1, partialArray)
                partialArray.pop()
            }
        }

        dfs(0,[])
        return answer
    }
}
