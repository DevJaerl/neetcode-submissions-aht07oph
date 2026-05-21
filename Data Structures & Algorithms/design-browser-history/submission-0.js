class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.homepage = new Node (homepage)
        this.count = 0
        this.head = this.homepage
        this.tail = this.homepage
        this.current = this.homepage
        this.currentPosition = 0
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.tail = this.current
        let newNode = new Node (url, this.tail)
        this.current.next = newNode
        this.current = this.tail = newNode
        this.currentPosition ++
        this.count = this.currentPosition
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
         if (steps>this.currentPosition){
            this.currentPosition = 0
            this.current = this.head
            return this.head.url
        }else{
            for (let i = 0; i<steps; i++){
                this.current = this.current.prev
                this.currentPosition --
            }
            return this.current.url
        }
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        if (steps+this.currentPosition>this.count){
            this.currentPosition = this.count
            this.current = this.tail
            return this.tail.url
        }else{
              for (let i = 0; i<steps; i++){
                this.current = this.current.next
                this.currentPosition++
            }
            return this.current.url

        }
    }
}

class Node {
    constructor(url, prev = null, next = null) {
        this.url = url
        this.prev = prev
        this.next = next
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
