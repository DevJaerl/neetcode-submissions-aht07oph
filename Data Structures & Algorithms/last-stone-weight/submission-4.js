class Solution {
 //Since we want to pop the heaviest values here we need to create a MAX heap!!
    constructor() {
        this.heap = [0]
    }

    push(val) {
        this.heap.push(val)
        let i = this.heap.length - 1
        let parent = Math.floor(i / 2)
        while (i > 1 && this.heap[i] > this.heap[parent]) {
            let temp = this.heap[i]
            this.heap[i] = this.heap[parent]
            this.heap[parent] = temp
            i = parent
            parent = Math.floor(i / 2)
        }
    }

    pop() {
        if (this.heap.length == 1) return 0
        // We return 0 here since maybe we took out both of the last stones and we have nothing remaining.
        // 0 is then the result of the last stone standing aka nothing.
        if (this.heap.length == 2) return this.heap.pop()

        let answer = this.heap[1] //store value from the top of the heap
        this.heap[1] = this.heap.pop() // Move the item from the bottom to the top to preserve structure

        let i = 1
        let leftChild = 2 * i
        let rightChild = 2 * i + 1

        while (leftChild < this.heap.length) {
            if (rightChild < this.heap.length &&
                this.heap[rightChild] > this.heap[leftChild] &&
                this.heap[i] < this.heap[rightChild]) {
                let temp = this.heap[i]
                this.heap[i] = this.heap[rightChild]
                this.heap[rightChild] = temp
                i = rightChild
                leftChild = 2 * i
                rightChild = 2 * i + 1
            } else if (this.heap[i] < this.heap[leftChild]) {
                let temp = this.heap[i]
                this.heap[i] = this.heap[leftChild]
                this.heap[leftChild] = temp
                i = leftChild
                leftChild = 2 * i
                rightChild = 2 * i + 1
            } else { break }
        }

        //here at the end we return the stored top value from earlier.
        return answer
    }

    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        //in this function we do NOT need to specify the heap!
        //Surprising but the push and pop functions already reference the heap set up in the constructor.
        // JS Solution specifics for adding the heap class as part of the solution class.
        let heap = this.heap
        for (let i = 0; i < stones.length; i++) {
            this.push(stones[i])
        } // This is easier than writing heapify considering the net answer turns out the same

        while (heap.length > 2) {
            let stone1 = this.pop()
            let stone2 = this.pop()

            let difference = Math.abs(stone1-stone2)

            if (difference != 0) {this.push(difference)}else{continue}
        }

        return this.pop()

    }
}