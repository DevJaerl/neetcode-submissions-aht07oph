class MyStack {
    /**
     * This is for making a queue with two stacks 
     * The way this would work (horribly ineffecient) 
     * Have one stack right side up for enquing. Make sure everything is in it first
     * The second stack flips the other upside down for dequeing only.
     * Have a variable remembering if the stack is empty and another for the tops value.
     */

    /**
     * We need to make a STACK with two QUEUES
     * Still helpful to keep flags in empty/last/top.
     */
    constructor() { }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if (this.count == 0) {
            this.queue1.push(x)
            this.count++
            return
        }
        if (this.current == this.queue1) {
            this.queue2.push(x)
            for (let i = 0; i < this.queue1.length; i++) {
                this.queue2.push(this.queue1[i])
            }
            this.queue1 = []
            this.current = this.queue2
        } else {

            this.queue1.push(x)
            for (let i = 0; i < this.queue2.length; i++) {
                this.queue1.push(this.queue2[i])
            }
            this.queue2 = []
            this.current = this.queue1

        }
        this.count++
        console.log("PUSH")
        console.log(this.queue1)
        console.log(this.queue2)
        console.log(this.current)
    }

    /**
     * @return {number}
     */
    pop() {
        this.count--
        let val = this.current[0]
        console.log('!!!!!!!!!!!!!!')
        console.log(this.current.length)
        console.log(this.current)
        if (this.current.length == 0) {
            return null
        }
        if (this.current.length == 1) {
            this.queue1 = this.queue2= []
            this.current = this.queue1
            return val // Resetting to base conditions
        }
        else {
            this.current = this.slideForward(this.current)
            console.log("POP")
            console.log(this.queue1)
            console.log(this.queue2)
            console.log(this.current)
            return val
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.current[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        if (this.count == 0) {
            return true
        }
        return false
    }

    slideForward(arr) {
        let newArray = new Array(arr.length - 2)
        for (let i = 1; i < arr.length; i++) {
            newArray[i - 1] = arr[i]
        }
        return newArray
    }

    count = 0
    queue1 = []
    queue2 = []
    current = this.queue1
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
