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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let queue = [...preorder]
        if (preorder.length == 0) return null

        function dfs(arr) {
            if (arr.length == 0) return null

            let current = queue.shift() //We would want this to...? set up the node?
            let node = new TreeNode(current)
            let index
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == current) index = i
            }
            
            node.left = dfs(arr.slice(0,index))
            node.right = dfs(arr.slice(index+1))
            return node
        }

        return dfs(inorder)
    }
}
