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
    reverseList(head, prev = null) {
        //goal to use recursion 
        if (!head){return prev}
       
        let current = head.next
        head.next = prev

        // Setup for next round
        prev = head
        head = current

        return this.reverseList(head, prev)
    }
}
