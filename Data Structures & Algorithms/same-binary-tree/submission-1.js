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

        if (p==null && q == null) return true;
        if (p==null || q==null) return false;

        let valuesInP = []
        let valuesInQ = []

        let traverseQueueP = []
        let traverseQueueQ = []

        // console.log(p)

        traverseQueueP.push(p)

        while (traverseQueueP.length !== 0) {
            let pCurrent = traverseQueueP.shift()
            valuesInP.push(pCurrent.val)
            // console.log(pCurrent.val)

            if (pCurrent.left == null) valuesInP.push("left-null")
            if (pCurrent.left) traverseQueueP.push(pCurrent.left);

            if (pCurrent.right == null) valuesInP.push("right-null")
            if (pCurrent.right) traverseQueueP.push(pCurrent.right);
        }

        traverseQueueQ.push(q)

        while (traverseQueueQ.length !== 0) {
            let qCurrent = traverseQueueQ.shift()

            valuesInQ.push(qCurrent.val)
            // console.log(qCurrent.val)

            if (qCurrent.left == null) valuesInQ.push("left-null")
            if (qCurrent.left) traverseQueueQ.push(qCurrent.left);

            if (qCurrent.right == null) valuesInQ.push("right-null")
            if (qCurrent.right) traverseQueueQ.push(qCurrent.right);
        }
        console.log(valuesInP.toString(), valuesInQ.toString())
        return (valuesInP.toString() == valuesInQ.toString())
    }
}
