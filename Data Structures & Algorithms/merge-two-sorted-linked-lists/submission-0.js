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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) {
            return null
        }
        if (!list1) {
            return list2
        }
        if (!list2) {
            return list1
        }

        let firstNode = new ListNode // We do not need to input starting values here since defaults are provided
        let pointer = firstNode

        while (list1 && list2) { // When we initialize the while loop we are checking for 
        // whether a NODE exists here.
            if (list1.val <= list2.val) { // In this if statement we are checking and comparing the VALUES
                pointer.next = list1
                list1 = list1.next
                console.log(firstNode)
            }else{
            // if (list2 < list1) { // This has to be the else case so it does not need to be specified.
                pointer.next = list2
                list2 = list2.next
                console.log(firstNode)
            }
            pointer = pointer.next
        }
        // If we are here one of the two lists should be empty.
        if (list1 === null) { // for null it looks like we need === instead of ==
            pointer.next = list2
        }else{
        // if (list2 === null) { // Since one of the lists must be null if it is not the first it must be the second.
            pointer.next = list1
        }

        return firstNode.next // This is because the first node initialized is 0/null
    }
}
