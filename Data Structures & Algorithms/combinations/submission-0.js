class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let answer = []

        function dfs(start, partialArray){
            if (partialArray.length == k){
                answer.push([...partialArray])
                return
            }

            if (partialArray.length > k || start>n ) return

            // Option including current
            partialArray.push(start)
            dfs(start+1, partialArray)
            partialArray.pop() // Backtracking

            // option excluding current
            dfs(start+1, partialArray) 

        }

        dfs(1,[])
        return answer
    }
}
