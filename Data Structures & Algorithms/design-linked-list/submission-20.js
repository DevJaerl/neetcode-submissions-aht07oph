class MyLinkedList {
    //Singly Linked List
    constructor() {
        this.tail = new Node();
        this.head = new Node(null, this.tail);
        this.count = -1;
        this.currentPosition = -1;
        this.current = this.head;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if (index > this.count + 1 || index < 0) return null;
        index--;
        if (index < this.currentPosition) {
            this.current = this.head;
            this.currentPosition = -1;
        }
        while (index != this.currentPosition) {
            this.current = this.current.next;
            this.currentPosition++;
        }
        return this.current;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index>this.count || index<0) return -1
        console.log(index, this.count)
        let local = this.getPrev(index);
        if (local ==null || local.next == null|| local.next.val==null) return -1;
        return local.next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let prev = this.head;
        let next = this.head.next;
        let newNode = new Node (val, next);
        prev.next = newNode;
        this.current = newNode;
        this.currentPosition = 0;
        this.count++;
        return;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let prev = this.getPrev(this.count + 1); //second to last node
        let next = this.tail;
        let newNode = new Node(val, next);
        prev.next = newNode;
        this.current = newNode;
        this.count++;
        this.currentPosition = this.count;
        return;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.count + 1) return;
        if (index==0) {
            this.addAtHead(val)
            return
        }else if (index==this.count+1){
            this.addAtTail(val)
            return
        }else{
            let prev = this.getPrev(index)
            let next = prev.next
            let newNode = new Node(val, next)
            prev.next = newNode
            this.current = newNode
            this.count++
            this.currentPosition = index
            return
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index<0|| index>this.count) return
        let prev = this.getPrev(index)
        let newNext = prev.next.next
        prev.next = newNext
        this.count--
        this.current = this.head
        this.currentPosition = -1
        return
    }
}

class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}
