class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        // let answer = new Set(); CANT use a set since sets compare by reference not values
        // So you could keep adding arrays with the same values to a set, it works better for individual items

        // THIS SOLUTION HINGES ON SORTING THE ARRAY!
        // WE MUST also sort this in ASCENDING aka smallest to biggest order for the logic below
        nums = nums.sort((a, b) => a-b);
        let answer = [[]]; // Just set this up like this, its a nightmare otherwise!!

        function dfs(position, partialArray) {
            for (let i = position; i < nums.length; i++) {
                if (i == position || nums[i] !== nums[i - 1]) { 

                    // If this is the first element of this level or this value DOES NOT equal the value before
                    
                    //Alternatively written:
                    //  if (i == position || !(nums[i] == nums[i - 1])) { 
                    // this second statement MUST be surrounded by parenthesis for the leading not to work
                    // since JS is literal in its left to right reading and execution!
                    
                    // Alternatively written:
                    //if (i > position  && nums[i] == nums[i - 1]) {continue} 
                    // ie. if this is not the first value at this level AND this value DOES match the value before
                    // But since this is the negation its the guard case and we must SKIP the code below!
                    partialArray.push(nums[i]);
                    answer.push([...partialArray]); // Remember this needs block parenthesis!
                    dfs(i + 1, partialArray);
                    partialArray.pop();
                }
            }
        }

        dfs(0, []);

        return answer;
    }
}
