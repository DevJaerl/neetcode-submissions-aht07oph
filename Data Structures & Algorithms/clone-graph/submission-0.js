/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let nodeVisitedAndCopiedMap = new Map()

        function dfs(currentNode) {
            if (currentNode == null) return currentNode
            if (nodeVisitedAndCopiedMap.has(currentNode.val)) return nodeVisitedAndCopiedMap.get(currentNode.val)

            let clone = new Node(currentNode.val)
            // ^The constructor for Nodes here automatically adds an empty array.
            nodeVisitedAndCopiedMap.set(clone.val, clone)
            //So when we call the value we are looking for the graph returns the full node

            for (let item of currentNode.neighbors) {
                clone.neighbors.push(dfs(item))
            }
            return clone
        }

        return dfs(node)

    }
}
