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
     * @return {TreeNode}
     */
    invertTree(root) {
        console.log(root)
        if (root == null || root.left==null && root.right==null) return root;

        //Reversing left and right nodes

        let temp = root.left
        root.left = root.right
        root.right = temp

        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(root)
        //Recursive function call on children
        if(root.left){
        root.left = (this.invertTree(root.left));
        }

        if(root.right){
        root.right = (this.invertTree(root.right));
        }

        return root // WE must return the root at the beginning in case the function is broken 
        // AND after all operations on a function.         

    }
}


        // if (root.val == null) return [];

        // let treeQueue = [root.val]
        // while (treeQueue.length > 0) {
        //     console.log(treeQueue)
        //     let currentNode = treeQueue.shift()

        //     //if left or right values are NUll, skip
        //     if (currentNode.left !== null) {
        //         treeQueue.push(currentNode.left)
        //     }
        //     if (currentNode.right !== null) {
        //         treeQueue.push(currentNode.right)
        //     }

        //     //     //skip the loop if there are not children
        //     if (currentNode.left == null && currentNode.right == null) continue;

        //     //     //Reverse position if only one child.
        //     if (currentNode.right == null) {
        //         currentNode.right == currentNode.left
        //         currentNode.left == null
        //         continue
        //     }

        //     if (currentNode.left == null) {
        //         currentNode.left == currentNode.right
        //         currentNode.right == null
        //         continue
        //     }

        //     //     //Reverse with two children

        //     let temp = currentNode.left
        //     currentNode.left = current.right
        //     current.right = temp
        // }
        // console.log("end")
        // // //How will we return the last node of the tree?
        // return root  // We are inverting the tree in place. 
