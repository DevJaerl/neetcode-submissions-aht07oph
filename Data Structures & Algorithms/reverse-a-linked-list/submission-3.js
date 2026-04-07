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
        if (!head) {
            return null
        }
        if (!head.next) {
            return head
        }

        let pointer = head
        let tail = null
        let second = head.next
        while (pointer.next) {
            pointer.next = tail
            tail = pointer
            pointer = second
            second = pointer.next
        }

        pointer.next = tail
        return pointer
    }
}
