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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        console.log(p, q)
        if (p == null && q == null) { return true }
        if (!p) return false;
        if (!q) return false
        else if (p.val !== q.val  ||
            ((p.left == null || q.left == null) && p.left !==q.left) ||
            ((p.right == null || q.right == null)&& p.right!==q.right)) { 
                return false }
        else {
            return (this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right))
        }
    }
}
