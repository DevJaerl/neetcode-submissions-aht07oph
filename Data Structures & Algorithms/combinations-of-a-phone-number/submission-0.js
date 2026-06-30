class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     * Questions considered while coding:
     * Can we put something into the partial array based on the options array at a position?
     * Then how do we backtrack and choose a different option?
     * How do we put the partial array into the answer?
     */
    letterCombinations(digits) {
        let answer = [];
        if (digits == "") return answer;
        // since the dfs call does not take in the optionsArray to do this check
        //the guard clause must move to the outer array here.
        let arrayInProgress = [];
        let letterBox = {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["m", "n", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"],
        };

        function dfs(position) {
            if (arrayInProgress.length == digits.length) {
                // answer.push([...arrayInProgress])
                // Needed to JOIN the items since we want to return STRINGS not partial arrays!
                answer.push(arrayInProgress.join(""));
                return;
                // So the recursive endpoint is being at the end of the digits array.
            }

            let optionsArray = letterBox[digits[position]];
            for (let i = 0; i < optionsArray.length; i++) {
                // inclusive case defined only for this syntax!
                arrayInProgress.push(optionsArray[i]);
                dfs(position + 1);
                // Note we are moving through the DIGITS string here and picking a new number.
                // Recursion handles keeping track of the partial arrays!
                arrayInProgress.pop();
            }
        }

        dfs(0); 
        // Why? Since ALL backtracking must happen in the same place the for loop cannot exist at this level.
        return answer;
    }
}
