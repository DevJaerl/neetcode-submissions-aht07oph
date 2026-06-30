class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     * Learnings:
     * - Using the regular DFS for combination sum means we DO NOT use one number twice since we call dfs on position +1 
     */
    combinationSum(nums, target) {
        let answer = [];
        nums.sort((a,b)=> b-a); // MUST specify sorting for JS

        function dfs(position, currentSum, partialArray) {
            if (currentSum == target) {
                answer.push([...partialArray]);
                return;
            }

            if (position > nums.length - 1 || currentSum > target) return;

            //proceed while including current item
            let current = nums[position]
            partialArray.push(current);
            currentSum += current
            dfs(position, currentSum, partialArray); 
            // Key here is we DO NOT move DSA forward from the current index, 
            // the excludes case will cover this if needed in backtracking!
            //Reset Inputs while Backtracking
            partialArray.pop()
            currentSum -= current

            //proceed without including current item
            dfs(position+1, currentSum, partialArray)
        }

        dfs(0, 0, []);
        return answer;
    }
}
