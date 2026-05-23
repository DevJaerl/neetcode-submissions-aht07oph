class MyLinkedList {
    //Doubly Linked List
    //NOTE - CANNOT have the same name for this.item and item!!! Need to be more different
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.count = -1;
        this.currentPosition = -1;
        this.current = this.head; //very important to be consistent with naming!!
    }

    /**
     * @param {number} index
     * @return {ListNode}
     * This function is not required for functional testing.
     * If we do getNode instead of getPrev it makes our logic easier.
     */
    getNode(index) {
        if (index > this.count || index < 0) return null;
        while (index != this.currentPosition) {
            if (index > this.currentPosition) {
                this.current = this.current.next;
                this.currentPosition++;
            } else if (index < this.currentPosition) {
                this.current = this.current.prev;
                this.currentPosition--;
            }
        }
        return this.current;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.getNode(index);
        console.log(this);
        if (current ===null)return -1
        return current.val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let prev = this.head;
        let next = this.head.next;
        let newNode = new Node(val, prev, next);

        prev.next = newNode;
        next.prev = newNode;
        this.count++;
        this.current = newNode;
        this.currentPosition = 0;
        return;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let prev = this.tail.prev;
        let next = this.tail;
        let newNode = new Node(val, prev, next);

        prev.next = newNode;
        next.prev = newNode;
        this.count++;
        this.currentPosition = this.count;
        this.current = newNode;
        return;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.count + 1 || index < 0) return;
        if (index == 0) {
            this.addAtHead(val);
            return;
        } else if (index == this.count + 1) {
            this.addAtTail(val);
            return;
        } else {
            let current = this.getNode(index); // Very important to get this right
            let prev = current.prev;
            let next = current;
            let newNode = new Node(val, prev, next);
            prev.next = newNode;
            next.prev = newNode;
            this.count++;
            this.current = newNode;
            this.currentPosition = index
            return;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index > this.count || index < 0) return;
        let current = this.getNode(index);
        let prev = current.prev;
        let next = current.next;
        prev.next = next;
        next.prev = prev;
        this.count--;
        this.current = this.head;
        this.currentPosition = -1;
        return;
    }
}

class Node {
    constructor(val = null, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
