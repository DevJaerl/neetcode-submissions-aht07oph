/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let newHead = null

        if (head == newHead) return newHead;

        let current = head
        let next = current.next

        while (next) {
            console.log("11111111111111111new HEad", newHead)
            console.log("11111111111111111current", current)
            console.log("11111111111111111 next", next)

            current.next = newHead
            newHead = current
            current = next
            next = current.next

            console.log("22222222222222222 new HEad", newHead)
            console.log("22222222222222222 current", current)
            console.log("22222222222222222  next", next)
        }

        current.next = newHead
        return current
    }
}
