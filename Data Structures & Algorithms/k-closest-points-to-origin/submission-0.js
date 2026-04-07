class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     * 
     * Technically it does not matter how many times we call the distance function
     * Since it adds a constant time function to the overall time complexity.
     * 
     * We can either create a MAX heap with a max length of K or 
     * We can create a MIN heap and pop the top (smallest distance values) into a new array k times
     * 
     */

    constructor() {
        this.heap = [0]
    }

    //To keep k values as the heap length we must build a MAX heap!
    push([xValue, yValue], maxLength) { // Instead of pushing every value in and popping the lowest value
        this.heap.push([xValue, yValue])
        let i = this.heap.length - 1
        let parent = Math.floor(i / 2)
        console.log(this.heap[i])
        while (i > 1 && this.distance(this.heap[i]) > this.distance(this.heap[parent])) {
            let temp = this.heap[i]
            this.heap[i] = this.heap[parent]
            this.heap[parent] = temp
            i = parent
            parent = Math.floor(i / 2)
        }

        if (this.heap.length > maxLength + 1) this.pop()
    }

    pop() {
        if (this.heap.length == 1) return
        if (this.heap.length == 2) return this.heap.pop()

        let topItem = this.heap[1]
        this.heap[1] = this.heap.pop() // Move the the last item in the heap to the top

        let i = 1
        let leftChild = 2 * i
        let rightChild = 2 * i + 1

        while (leftChild < this.heap.length) {
            if (rightChild < this.heap.length &&
                this.distance(this.heap[rightChild]) > this.distance(this.heap[leftChild]) &&
                this.distance(this.heap[rightChild]) > this.distance(this.heap[i])) {
                //Swap Right Child
                let temp = this.heap[i]
                this.heap[i] = this.heap[rightChild]
                this.heap[rightChild] = temp
                i = rightChild
                leftChild = 2 * i
                rightChild = 2 * i + 1
            }else if (this.distance(this.heap[leftChild])>this.distance(this.heap[i])){
            //Swap left Child
            let temp = this.heap[i]
            this.heap[i] = this.heap[leftChild]
            this.heap[leftChild] = temp
            i = leftChild
            leftChild = 2 * i
            rightChild = 2 * i + 1
        } else { break }
    }
}

distance(point) {
    if (!point) return 0
    let [x, y] = point
    let answer = Math.sqrt(x * x + y * y)
    console.log(answer)
    return answer
}

kClosest(points, k) {
    for (let i = 0; i < points.length; i++) {
        this.push(points[i], k)
    }
    this.heap.shift()// remove the preceding 0 from the heap array.
    //!!! The shift function returns the integer NOT the array!!!
    return this.heap
}
}
