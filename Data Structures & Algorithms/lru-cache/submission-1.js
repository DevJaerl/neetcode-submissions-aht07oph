class LRUCache {
    /**
     * @param {number} capacity
     * In this version of the code we want to use the Javascript Map function which stores insertion order
     * TO DO THIS WE MUST
     * Delete and re-add items if the key exists
     * We must do this BOTH in the get and put functions to maintain recency in insertion order.
     */
    constructor(capacity) {
        this.map = new Map()
        this.capacity = capacity
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            //First we have to delete and re-add key/value to map for O(1) requested complexities.
            let value = this.map.get(key)
            this.map.delete(key)
            this.map.set(key, value)
            return this.map.get(key)
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            this.map.delete(key)
            this.map.set(key, value)
            return
        }

        if (this.map.size == this.capacity) {
            let itemToDelete = this.map.keys().next().value
            this.map.delete(itemToDelete)
        }

        //for whatever reason this must happen AFTER deleting the object if at capacity
        this.map.set(key, value)
    }
}
