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
     * @return {number}
     */
    maxDepth(root) {
        let counter = 0
        if (!root) return counter;

        let unprocessedItems = [root]

        while (unprocessedItems.length > 0) {
            let length = unprocessedItems.length

            for (let i=0; i<length; i++){
            let currentItem = unprocessedItems.shift()

            if (currentItem.left){
            unprocessedItems.push(currentItem.left)
            }

            if (currentItem.right){
            unprocessedItems.push(currentItem.right)
            }
            }
           counter ++
        }

        return counter
    }
}
