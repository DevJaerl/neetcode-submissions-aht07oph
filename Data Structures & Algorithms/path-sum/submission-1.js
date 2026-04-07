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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        let currentSum = 0

        function leafPath(root, currentSum) {
            if (root == null) return false

            currentSum += root.val

            if (currentSum == targetSum && root.left == null && root.right == null) return true

            if (leafPath(root.left, currentSum)) return true

            if (leafPath(root.right, currentSum)) return true

            currentSum -= root.val
            return false
        }

        return leafPath(root, currentSum)

    }
}
