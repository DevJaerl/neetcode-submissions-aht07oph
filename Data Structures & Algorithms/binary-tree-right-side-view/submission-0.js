/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * 
 * rightSideView(root) {
        if (!root) return []

        let nodesToVisit = [root]
        let answer = []
Okay so this solution is perfectly fine for the first case ONLY
because we did not look at the picture explaining other cases. Remember to ask clarifying questions and think about edge cases.
        while (nodesToVisit.length>0){
            let current = nodesToVisit.shift()
            answer.push(current.val)
            if (current.right){
                nodesToVisit.push(current.right)
            }
        }
        return answer
    }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return []
        let level = 0
        let nodesToVisit = [root]
        let answer = []
        while (nodesToVisit.length > 0) {
            let levelLength = nodesToVisit.length
            //For every node in the start of the level,
            // put the children into the nodes to visit array
            for (let i=0; i<levelLength; i++){
                let current = nodesToVisit.shift()
                if (current.left)nodesToVisit.push (current.left)
                if (current.right)nodesToVisit.push(current.right)
                if (i==levelLength-1){ //for the last item of each level
                    answer.push(current.val)
                }
            }
            level++
        }
        return answer
    }
}
