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
     * @param {number} key
     * @return {TreeNode}
     */
    minNode(root) {
        let current = root
        while (current != null && current.left !== null) {
            current = current.left
        }
        return current
    }

    deleteNode(root, key) {
        if (root == null) return root
        //Here we are looking for the value so we replace the current search object of focus
        if (key > root.val) {
            root.right = this.deleteNode(root.right, key)
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key)
        } else {//when we find the value so we RETURN stuff
            if (root.left==null) {
                return root.right
            } else if (root.right == null) {
                return root.left
            } else {//two child case
                let minNode = this.minNode(root.right)
                root.val = minNode.val // In Both of these we just want the values
                root.right = this.deleteNode(root.right,minNode.val) // AGAIN Must reset what we call the function for.
            }
        }
        return root
    }
}
