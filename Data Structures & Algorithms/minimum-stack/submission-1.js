class MinStack {
    constructor(name) {
        this.name = name
        this.array = []
        this.minArray = []
        this.length = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.array.push(val)
        if (this.length == 0) {
            this.minArray.push(val)
        } else {
            this.minArray.push(Math.min(val, this.minArray[this.length - 1]))
        }

        this.length++
    }

    /**
     * @return {void}
     */
    pop() {
        this.array.pop()
        this.minArray.pop()
        this.length--
    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArray[this.length - 1]
    }
}
