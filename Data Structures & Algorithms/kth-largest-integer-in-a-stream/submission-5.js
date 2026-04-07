class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */

    //In this function we do NOT want to return the kth largest
    constructor(k, nums) {
        this.heap = []
        this.heap.push(0)

        this.k = k // this is how we make something accessible to the rest of the class

        for (let i = 0; i < nums.length; i++) {
            this.pushToHeap(nums[i])
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    // From this function we DO want to return the kth largest
    add(val) {
        this.pushToHeap(val)
        return this.heap[1]
    }

    pushToHeap(val) {
        this.heap.push(val)
        let i = this.heap.length - 1
        let parent = Math.floor(i / 2)

        //percolate the value UP the heap
        while (i > 1 && this.heap[i] < this.heap[parent]) {
            let temp = this.heap[i]
            this.heap[i] = this.heap[parent]
            this.heap[parent] = temp
            i = parent
            parent = Math.floor(i / 2)
        }
        if (this.heap.length > this.k + 1) this.popFromHeap()
    }

    //Cant just pop the last thing, need to pop from the ROOT so use the correct function
    popFromHeap() {
        if (this.heap.length == 1) return
        if (this.heap.length == 2) return this.heap.pop()

        let res = this.heap[1]
        this.heap[1] = this.heap.pop()

        let i = 1
        let leftChild = 2 * i
        let rightChild = 2 * i + 1
        //This makes it easier to follow the variable names BUT it MUST be updated with i in each iteration

        while (leftChild < this.heap.length) {
            if (rightChild < this.heap.length &&
                this.heap[rightChild] < this.heap[leftChild] &&
                this.heap[i] > this.heap[rightChild]) {

                let temp = this.heap[i]
                this.heap[i] = this.heap[rightChild]
                this.heap[rightChild] = temp
                i = rightChild
                leftChild = 2 * i
                rightChild = 2 * i + 1
            } else if (this.heap[i] > this.heap[leftChild]) {
                //if only this case is met
                let temp = this.heap[i]
                this.heap[i] = this.heap[leftChild]
                this.heap[leftChild] = temp
                i = leftChild
                leftChild = 2 * i
                rightChild = 2 * i + 1
            } else { break }
        }
    }
}


