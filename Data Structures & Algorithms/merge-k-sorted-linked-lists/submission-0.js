/**
 * Notes to Self:
 * MergeSort Implementation
 * The Linked lists ARE SORTED
 * We do not know how many there are (k)
 * What we could do - instead of breaking the arrays (lists) down into the smallest subpart
 * We can essentially combine lists two at a time adding the next lower value to the communal list
 * RETURN the overall list  
 * Solution will be RECURSIVE as Merge sort is recursive  
 * 
 * - Will need to split k into pairs of linked lists
 * - Will need to send back up sorted combined linked lists
 * -(They do this in place in the module with arrays, can use TEMP arrays/new replacemnet linked list)
 * 
 */
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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        //Lists===null and lists.length==1 are TWO CASES!!!! 
        //to be handled differently please!
        if (lists.length ===0)  return null // THIS MUST BE RETURNED AS NULL, it somehow turns into []???
        if (lists.length === 1) return lists[0] //HERE WE RETURN THE FIRST LISTNODE!!!
        let mid = Math.floor(lists.length / 2)
        let leftArr = lists.slice(0, mid)
        let rightArr = lists.slice(mid)
        console.log("1111111", leftArr, rightArr)
        return (this.mergeTwoLists(this.mergeKLists(leftArr), this.mergeKLists(rightArr)))
        //Hopefully this is breaking the k lists down into pairs
        //then sending the listNode in the head position of the two into the next function.

    }

    mergeTwoLists(listNode1, listNode2) {
        //console.log("???",listNode1, listNode2)
        if (!listNode1 && !listNode2) return null

        if (!listNode1) return listNode2
        if (!listNode2) return listNode1

        let combinedList = new ListNode // auto-value of 0
        let current = combinedList

        while (listNode1 && listNode2) {
            if (listNode1.val <= listNode2.val) {
                current.next = listNode1
                listNode1 = listNode1.next
            } else {
                current.next = listNode2
                listNode2 = listNode2.next
            }
            //console.log("!!!!!",current, listNode1, listNode2)
            // current.next.next = null //THIS WILL HAPPEN AUTOMATICALLY NO NEED FOR THIS LINE
            current = current.next
        }
        //HERE WE HAVE TO CHECK FOR NULL!!!!
        if (!listNode1) { //Syntax here seems important.
            current.next = listNode2
        }
        else {
            current.next = listNode1
        }

        return combinedList.next // To return the head not the dummy value we set up
    }
}
