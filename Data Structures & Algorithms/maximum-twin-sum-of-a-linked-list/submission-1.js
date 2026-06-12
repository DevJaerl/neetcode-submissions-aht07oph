/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 * Approach:
 * Fast and Slow pointers to identify the centermost node
 * Using a Stack for storage of the first nodes to be able to retrieve their values 
 * Continue to use the slow pointer for iterating through nodes in the second half of the linked list
 * O(n) time
 * O(n) space
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {number}
     */
    pairSum(head) {
        let slow=head, fast=head
        let stack = []
        let max = 0
        while (fast!=null && fast.next!=null){
            stack.push(slow.val)
            slow = slow.next
            fast = fast.next.next
        }
        //When this while loop breaks, slow is just right of the center

        while (slow!=null){
            let current= stack.pop()
            max = Math.max(max, current+slow.val)
            slow = slow.next
        }
        return max
    }
}
