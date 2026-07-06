class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let answer = [];
        let current = [];
        let counter = new Map();

        for (let item of nums) {
            if (counter.has(item)) {
                counter.set(item, counter.get(item) + 1);
            } else {
                counter.set(item, 1);
            }
        }

        function dfs() {
            if (current.length == nums.length) {
                answer.push([...current]);
                return;
            }

            //Choosing an item from the options available - MUST iterate through all positions!
            for (let [key, value] of counter) { // To iterate through dictionary MUST do for of loop!!!
                //Building the partial array, adding the next value, cleanup ALL in the if clause!!

                if (value > 0) {
                    // Since we have the key and value shorthands we DO NOT need to use map.set/map.get!
                    current.push(key);
                    counter.set(key, value - 1);

                    dfs(); // Where we find the item for the next position!

                    // cleanup - happens in the DFS backtracking NOT the solution case!!!
                    let lastItem = current.pop();
                    counter.set(lastItem, counter.get(lastItem) + 1);
                }
            }
        }

        dfs();
        return answer;
    }
}
