class PrefixTree {
    constructor() {
        this.root = new TrieNode
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root
        for (let letter of word){
            if (!current.children.has(letter))current.children.set(letter, new TrieNode())
            current = current.children.get(letter)
        }
        current.word = true // At the end of the word mark it
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root
        for(let letter of word){
            if (!current.children.has(letter)) return false
            current = current.children.get(letter)
        }
        return current.word
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root
        for (let letter of prefix){
            if (!current.children.has(letter)) return false
            current = current.children.get(letter)
        }
        return true
    }
}

class TrieNode{
    constructor(){
        this.word = false
        this.children = new Map()
    }
}
