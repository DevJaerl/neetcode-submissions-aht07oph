class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     * I still think a hashmap would be more efficient for this problem but will do with a heap for practice.
     
     Order of things to do:
     Build a heap with the items from nums (heapify)
     We could then pop k times

     More efficiently, we could build a  MAXheap of size k and return the last element.
     Remember the last element will be k+1 in this case.
     
     */

    constructor() {
        this.heap = [0]
    }

    push(value, maxLength) {
        this.heap.push(value)
        let i = this.heap.length - 1

        //Percolate the value up the heap
        let parent = Math.floor(i / 2)
        while (i > 1 && this.heap[i] < this.heap[parent]) {
            let temp = this.heap[i]
            this.heap[i] = this.heap[parent]
            this.heap[parent] = temp
            i = parent
            parent = Math.floor(i / 2)
        }

        if (this.heap.length > maxLength+1) this.pop() 
        // Watch out for the 0 vs 1 indexing. This is why we add 1 to maxLength
    }

    pop() {
        if (this.heap.length == 1) return
        if (this.heap.length == 2) return this.heap.pop()

        let response = this.heap[1] // Store value from the top of the array
        this.heap[1] = this.heap.pop() // Put the last value into the top/root

        //Percolate this value down.
        let i = 1
        let leftChild = 2 * i
        let rightChild = 2 * i + 1

        while (leftChild < this.heap.length) {
            if (rightChild < this.heap.length &&
                this.heap[rightChild] < this.heap[leftChild] &&
                this.heap[i] > this.heap[rightChild]) {
                // Swap i and right child
                let temp = this.heap[i]
                this.heap[i] = this.heap[rightChild]
                this.heap[rightChild] = temp
                i = rightChild
                leftChild = 2 * i
                rightChild = 2 * i + 1
            }
            else if (this.heap[i] > this.heap[leftChild]) {
                //Swap i and left child
                let temp = this.heap[i]
                this.heap[i] = this.heap[leftChild]
                this.heap[leftChild] = temp
                i = leftChild
                leftChild = 2 * i
                rightChild = 2 * i + 1
            } else { break }
        }
        return
    }

    findKthLargest(nums, k) {
        for (let i = 0; i < nums.length; i++) {
            this.push(nums[i], k)
            console.log(this.heap)
        }
        // Alternatively we could pop elements until we reach this.
        return this.heap[1]
        //Here we accidentally built a min heap instead of a max heap. 
        //The consequence of this is the kth value is always in the this.heap[1] position
        // since the length of the heap is k+1 values where the +1 is the leading 0 in the array.
    }
}
