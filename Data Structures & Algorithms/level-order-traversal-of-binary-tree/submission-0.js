/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return []
        let level = 0
        let placesToVisitQueue = [root]
        let answer = []

        while (placesToVisitQueue.length > 0) {
            let levelSize = placesToVisitQueue.length
            let currentLevelValues = []
            for (let i = 0; i < levelSize; i++) {
                let current = placesToVisitQueue.shift()

                if (current.left) placesToVisitQueue.push(current.left)
                if (current.right) placesToVisitQueue.push(current.right)

                currentLevelValues.push(current.val)
            }
            answer.push([...currentLevelValues])
            level++
        }
        return answer
    }
}
