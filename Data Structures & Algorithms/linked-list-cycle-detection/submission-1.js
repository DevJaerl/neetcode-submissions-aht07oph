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
     * @return {boolean}
     */
    hasCycle(head) {
        console.log(head)
        if (!head)return false

        if (head.next == null){
            return false
        } else if (head.next.next == -1){
            return false
        }

        let current = head
        let pointerOne = current 
        let secondPointer = current.next

        if (pointerOne == secondPointer){
            return true
        }

        while (pointerOne && secondPointer && pointerOne!==secondPointer){
        if (!pointerOne.next || !secondPointer.next || !secondPointer.next.next){
            return false
        }

        secondPointer = secondPointer.next.next
        pointerOne = pointerOne.next
        }


        if (pointerOne == secondPointer){
            return true
        }

        // console.log(primary.val)
        // console.log(secondary.val)

        // this.hasCycle(head.next)

    }
}
